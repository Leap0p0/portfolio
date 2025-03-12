import { useState } from "react";
import javascriptIcon from "../img/icon-javscript.svg";
import GitIcon from "../img/git.svg";
import reactIcon from "../img/logo-react-svgrepo-com.svg"
import nestIcon from "../img/nestjs-svgrepo-com.svg"
import tailwindIcon from "../img/tailwind-css-svgrepo-com.svg"
import htmlIcon from "../img/html5-02-svgrepo-com.svg"
import cmsIcon from "../img/wordpress-139-svgrepo-com.svg"
import bootstrapIcon from "../img/bootstrap-fill-svgrepo-com.svg"
import nodejsIcon from "../img/nodejs-svgrepo-com.svg"
import phpIcon from "../img/php01-svgrepo-com.svg"
import BlurText from "../Utils/BlurText";

const skills = [
  { name: "Git", icon: GitIcon },
  { name: "React", icon: reactIcon },
  { name: "Nest.Js", icon: nestIcon },
  { name: "Javascript", icon: javascriptIcon },
  { name: "Tailwinds", icon: tailwindIcon },
  { name: "HTML / CSS", icon: htmlIcon },
  { name: "CMS", icon: cmsIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "NodeJS", icon: nodejsIcon },
  { name: "PHP", icon: phpIcon },
];

export default function SkillsGrid() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="text-center my-16 pt-0">
        <BlurText
                text="My Skills"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-4xl font-bold text-black text-center mb-12 flex justify-center"
        />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`p-6 border-2 rounded-none flex flex-col items-center transition-all duration-300 ${
              hoveredSkill === skill.name
                ? "bg-black text-white font-sora border-black"
                : "border-black hover:bg-black hover:text-white font-sora"
            }`}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className={`w-12 h-12 transition-all duration-300 ${
                hoveredSkill === skill.name ? "invert" : ""
              }`}
            />
            <p className="mt-3 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
