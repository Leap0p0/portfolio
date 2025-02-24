import { useState } from "react";
import javascriptIcon from "../img/icon-javscript.svg";

const skills = [
  { name: "Git", icon: "/icons/git.svg" },
  { name: "Javascript", icon: javascriptIcon },
  { name: "Sass/Scss", icon: "/icons/sass.svg" },
  { name: "Nest.Js", icon: "/icons/nestjs.svg" },
  { name: "Storybook", icon: "/icons/storybook.svg" },
  { name: "Socket.io", icon: "/icons/socketio.svg" },
  { name: "Storybook", icon: "/icons/storybook.svg" },
  { name: "Socket.io", icon: "/icons/socketio.svg" },
];

export default function SkillsGrid() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="text-center my-16">
      <h2 className="text-3xl font-bold mb-8">
        My <span className="text-black">Skills</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 max-w-4xl mx-auto">
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
