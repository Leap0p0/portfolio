/* This checkout contains a compiled React site, without its original source tree.
 * Apply the bounded portfolio update to the original bundle using its AST and
 * compose its source map. Other components and the original build stay intact.
 * Run: node scripts/update-projects.cjs
 * Install dependencies with npm install, then run npm run update-projects.
 * The existing portfolio/node_modules is also supported in this checkout.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const {createRequire} = require('module');
const root = path.resolve(__dirname, '..');
let babel;
try { babel = require('@babel/core'); }
catch { babel = createRequire(path.join(root, 'portfolio', 'package.json'))('@babel/core'); }
const t = babel.types;
const projects = JSON.parse(fs.readFileSync(path.join(root, 'projects.json'), 'utf8'));
const removedProjects = new Set(['Smartkids']);
const original = 'main.5521f273.js';
const inputPath = path.join(root, 'static/js', original);
const originalCode = fs.readFileSync(inputPath, 'utf8');
let arrays = 0, translations = 0, labels = 0, altTexts = 0;
const labelledHeadings = new WeakSet();

function property(node, name) {
  return node.properties.find(p => (p.key?.name || p.key?.value) === name);
}
function newProject(p) {
  return t.valueToNode({
    id: 0, title: p.key, description: p.key + 'Desc',
    image: './static/media/projects/' + p.image,
    link: p.link, category: p.category, sector: p.sector,
  });
}
const result = babel.transformSync(originalCode, {
  filename: original, configFile: false, babelrc: false, compact: true,
  sourceMaps: true,
  inputSourceMap: JSON.parse(fs.readFileSync(inputPath + '.map', 'utf8')),
  plugins: [function () { return {visitor: {
    AssignmentExpression(p) {
      if (t.isMemberExpression(p.node.left) && p.node.left.property.name === 'p' && t.isStringLiteral(p.node.right, {value: '/portfolio/'})) {
        p.node.right = t.stringLiteral('./');
      }
    },
    ArrayExpression(p) {
      if (!p.node.elements.some(e => t.isObjectExpression(e) && property(e, 'title')?.value.value === 'FireSafety')) return;
      arrays++;
      const updated = [];
      for (const item of p.node.elements) {
        const key = property(item, 'title').value.value;
        if (removedProjects.has(key)) continue;
        const replacement = projects.find(project => project.replaces === key);
        updated.push(replacement ? newProject(replacement) : item);
        if (key === 'Mypatch') projects.filter(project => !project.replaces).forEach(project => updated.push(newProject(project)));
      }
      updated.forEach((item, i) => property(item, 'id').value = t.numericLiteral(i + 1));
      const expected = p.node.elements.length - removedProjects.size + projects.filter(project => !project.replaces).length;
      if (updated.length !== expected) throw new Error(`Expected ${expected} projects`);
      p.node.elements = updated;
      p.skip();
    },
    CallExpression(p) {
      const node = p.node;
      if (t.isMemberExpression(node.callee) && node.callee.object.name === 'JSON' && node.callee.property.name === 'parse' && t.isStringLiteral(node.arguments[0])) {
        let messages;
        try { messages = JSON.parse(node.arguments[0].value); } catch { return; }
        if (!messages.FireSafetyDesc || !messages.MyProjects) return;
        const isEnglish = messages.MyProjects === 'My Projects';
        for (const project of projects) {
          messages[project.key] = project.title;
          messages[project.key + 'Desc'] = isEnglish ? project.descriptionEn : project.description;
        }
        for (const removed of [...projects.map(project => project.replaces).filter(Boolean), ...removedProjects]) {
          delete messages[removed]; delete messages[removed + 'Desc'];
        }
        node.arguments[0] = t.stringLiteral(JSON.stringify(messages));
        translations++;
      }
      // Add the supplied sector label immediately above a project's heading.
      if (t.isStringLiteral(node.arguments[0], {value: 'h3'}) && t.isObjectExpression(node.arguments[1])) {
        if (labelledHeadings.has(node)) return;
        const children = property(node.arguments[1], 'children')?.value;
        const descriptor = t.isCallExpression(children) && children.arguments[0];
        if (!t.isObjectExpression(descriptor)) return;
        const title = property(descriptor, 'id')?.value;
        if (!t.isMemberExpression(title) || title.property.name !== 'title') return;
        const project = title.object;
        const sector = t.memberExpression(t.cloneNode(project), t.identifier('sector'));
        const label = t.callExpression(t.cloneNode(node.callee, true), [t.stringLiteral('p'), t.objectExpression([
          t.objectProperty(t.identifier('style'), t.valueToNode({fontSize: '0.75rem', letterSpacing: '0.12em', color: '#9ca3af', marginTop: '1rem'})),
          t.objectProperty(t.identifier('children'), t.cloneNode(sector)),
        ])]);
        if (!p.parentPath.isArrayExpression()) throw new Error('Unexpected heading structure');
        labelledHeadings.add(node);
        p.parentPath.node.elements.splice(p.key, 0, t.logicalExpression('&&', sector, label));
        labels++;
      }
    },
    ObjectProperty(p) {
      // Use translated project names as image alternatives and hover captions.
      if (!['altText', 'captionText'].includes(p.node.key.name) || !t.isMemberExpression(p.node.value) || p.node.value.property.name !== 'title') return;
      const title = t.cloneNode(p.node.value, true);
      p.node.value = t.callExpression(t.identifier('t'), [t.objectExpression([t.objectProperty(t.identifier('id'), title)])]);
      altTexts++;
    },
  }}; }],
});
if (arrays !== 1 || translations !== 2 || labels !== 1 || altTexts !== 2) {
  throw new Error(`Unexpected build structure: ${JSON.stringify({arrays, translations, labels, altTexts})}`);
}
const hash = crypto.createHash('sha256').update(result.code).digest('hex').slice(0, 12);
const output = `main.projects-${hash}.js`;
result.map.file = output;
fs.writeFileSync(path.join(root, 'static/js', output), result.code + `\n//# sourceMappingURL=${output}.map\n`);
fs.writeFileSync(path.join(root, 'static/js', output + '.map'), JSON.stringify(result.map));
const indexPath = path.join(root, 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');
const updated = html.replace(/static\/js\/main\.[^"<>]+\.js(?=")/, 'static/js/' + output).replaceAll('="/portfolio/', '="./');
if (updated === html && !html.includes(output)) throw new Error('Script reference not found');
fs.writeFileSync(indexPath, updated);
const manifestPath = path.join(root, 'asset-manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
for (const key of Object.keys(manifest.files)) manifest.files[key] = manifest.files[key].replace(/^\/portfolio\//, './');
manifest.files['main.js'] = './static/js/' + output;
for (const key of Object.keys(manifest.files)) if (/^main\..*\.js\.map$/.test(key)) delete manifest.files[key];
manifest.files[output + '.map'] = './static/js/' + output + '.map';
manifest.entrypoints = manifest.entrypoints.map(entry => /^static\/js\/main\./.test(entry) ? 'static/js/' + output : entry);
for (const project of projects) {
  const asset = 'static/media/projects/' + project.image;
  if (!fs.existsSync(path.join(root, asset))) throw new Error('Screenshot missing: ' + asset);
  manifest.files[asset] = './' + asset;
}
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Updated portfolio projects, French and English text, sector labels and image alternatives: ${output}`);
