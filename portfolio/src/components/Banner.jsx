import React from "react";
import Image from "./../img/girl banner 1.svg";
import { FormattedMessage } from "react-intl";
import SplitText from "../Utils/SplitText";
import DiscordIcon from "../img/Social icon.svg";
import TwitterIcon from "../img/Social icon-2.svg";
import LinkedinIcon from "../img/linkedin.svg";
import GithubIcon from "../img/Octicons-mark-github.svg.png";

const handleAnimationComplete = () => {
    console.log("All letters have animated!");
};

export default function HeroSection() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-center gap-x-10 px-10 py-20">
        <div className="md:w-1/2 text-left">
            <h1 className="font-sora text-4xl font-light">
                <FormattedMessage id="hello" />
                <span className="font-extrabold">
                <SplitText
                    text="Léa Pollet"
                    className="text-4xl font-extrabold font-sora"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                </span>
            </h1>
            <h2 className="text-3xl font-bold mt-2">
                Frontend <span className="border-4 border-black px-2">Developer</span>
            </h2>
            <h3 className="text-3xl font-bold mt-2">
                Based In <span className="font-bold">France.</span>
            </h3>
            <p className="text-gray-600 mt-4">
                I'm Flora Sheen. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
  
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-6">
                <a href="https://discord.gg/yQcMBUUkNc" target="_blank" rel="noopener noreferrer">
                    <img src={DiscordIcon} alt="Facebook" title="Facebook" className="w-12 h-12" />
                </a>
                <a href="https://x.com/L4P0p0" target="_blank" rel="noopener noreferrer">
                    <img src={TwitterIcon} alt="Reddit" title="Reddit" className="w-12 h-12" />
                </a>
                <a href="https://www.linkedin.com/in/léa-pollet-0b32581a1/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinIcon} alt="Linkedin" title="Linkedin" className="w-12 h-12" />
                </a>
                <a href="https://github.com/Leap0p0" target="_blank" rel="noopener noreferrer">
                    <img src={GithubIcon} alt="Github-Logo" title="Github" className="w-12 h-12" />
                </a>
            </div>

            </div>
            <div className="md:w-1/2 mt-5 md:mt-0 flex justify-center">
            <img src={Image} alt="Hero Illustration" className="w-80 md:w-96" />
            </div>
      </section>
    );
}
  