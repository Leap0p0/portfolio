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
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-x-10 px-10 py-20">
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
                    <FormattedMessage
                        id="frontend_developer"
                        values={{
                            highlight: (chunks) => <span className="border-4 border-black px-2">{chunks}</span>,
                        }}
                    />
                </h2>


                <h3 className="text-3xl font-bold mt-2">
                    <FormattedMessage id="based_in" values={{ location: "France" }} />
                </h3>
                <p className="text-gray-600 mt-4">
                    <FormattedMessage id="description" />
                </p>

                {/* Réseaux sociaux */}
                <div className="flex space-x-4 mt-6">
                    <a href="https://discord.gg/yQcMBUUkNc" target="_blank" rel="noopener noreferrer">
                        <img src={DiscordIcon} alt="Discord" title="Discord" className="w-12 h-12" />
                    </a>
                    <a href="https://x.com/L4P0p0" target="_blank" rel="noopener noreferrer">
                        <img src={TwitterIcon} alt="Twitter" title="Twitter" className="w-12 h-12" />
                    </a>
                    <a href="https://www.linkedin.com/in/léa-pollet-0b32581a1/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedinIcon} alt="LinkedIn" title="LinkedIn" className="w-12 h-12" />
                    </a>
                    <a href="https://github.com/Leap0p0" target="_blank" rel="noopener noreferrer">
                        <img src={GithubIcon} alt="GitHub" title="GitHub" className="w-12 h-12" />
                    </a>
                </div>
            </div>
            <div className="md:w-1/2 mt-5 md:mt-0 flex justify-center">
                <img src={Image} alt="Illustration de Léa Pollet" className="w-80 md:w-96" />
            </div>
        </section>
    );
}
