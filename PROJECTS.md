# Mettre à jour les projets

Le site publié est à la racine de ce dépôt. Ce checkout contient le build React et ses source maps, sans l’arborescence source d’origine.

Les nouveaux projets sont décrits dans `projects.json` : titres, secteurs, descriptions françaises et anglaises, liens, images et filtres techniques. Les captures des sites sont dans `static/media/projects/`, au format WebP.

Pour modifier ces données et régénérer le JavaScript publié :

```sh
npm install
npm run update-projects
```

Le script part du bundle d’origine `static/js/main.5521f273.js`, applique uniquement les changements de projets, compose les source maps et met à jour les références dans `index.html` et `asset-manifest.json`. Il conserve le bundle d’origine. Les autres sections du portfolio restent celles du build existant.

Les remplacements sont Alphanexia TV → HDR Peinture, Newsletter Médecins du Monde → Optidress et MyPatch → Théâtre des Arts Vivants. Lovely Colors et Fidelygo sont ajoutés à la suite. Smartkids est retiré sans remplacement ; la fiche BSLYK existante est conservée. La numérotation des 15 projets est continue. La landing page Médecins du Monde est conservée.

Les fichiers à publier sont ceux de la racine du dépôt, y compris le nouveau bundle et `static/media/projects/`. Le dossier local `portfolio/` préexistant n’est pas la version modifiée.
