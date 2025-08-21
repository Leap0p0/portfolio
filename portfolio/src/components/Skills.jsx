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
import { useIntl } from "react-intl";
import { motion } from "framer-motion"; // Importer motion pour l'animation

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
  const { formatMessage } = useIntl();

  return (
    <section id="skills-slide" className="text-center my-16 pt-0">
      <BlurText
        text={formatMessage({ id: "MySkills" })}
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl font-bold text-black text-center mb-12 flex justify-center"
      />
      <motion.div
        
        className="grid grid-cols-2 md:grid-cols-5 gap-12 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: -100 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Final state
        transition={{ duration: 0.8 }} // Durée de l'animation
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`p-6 border-2 rounded-none flex flex-col items-center transition-all duration-300 ${
              hoveredSkill === skill.name
                ? "bg-black text-white font-sora border-black"
                : "border-black hover:bg-black hover:text-white font-sora"
            }`}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            initial={{ scale: 0.9 }} // Initial scale
            animate={{ scale: 1 }} // Final scale
            transition={{ duration: 0.3 }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className={`w-12 h-12 transition-all duration-300 ${
                hoveredSkill === skill.name ? "invert" : ""
              }`}
            />
            <p className="mt-3 font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
