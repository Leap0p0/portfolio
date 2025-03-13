import React from "react";
import TiltedCard from "./../Utils/TiltedCard";
import FireImage from "./../img/s0fj94przed8fvz7amsplwwb7aqk.png";
import TrikerImage from "./../img/Capture d’écran 2025-03-01 à 18-compressed-2.jpg";
import AvocatImage from "./../img/Capture d’écran 2025-03-01 à 18-compressed.jpg";
import MyleneImage from "./../img/image.png";
import BlurText from "../Utils/BlurText";
import AlphaNexiaImage from "./../img/alphanexia.jpg";
import MdmImage from "./../img/image copy.png";
import MdmMailImage from "./../img/image copy 2.png";
import ViewProjectIcon from "./../img/export.svg";
import crecheImage from "./../img/image copy 3.png";
import { useIntl } from "react-intl";

const projects = [
  {
    id: 1,
    title: "FireSafety",
    description: "FireSafetyDesc",
    image: FireImage,
    link: "https://fire-safety.org",
  },
  {
    id: 2,
    title: "TrikerCollecte",
    description: "TrikerCollecteDesc",
    image: TrikerImage,
    link: "https://www.trik3r-collecte.fr",
  },
  {
    id: 3,
    title: "MyleneDigital",
    description: "MyleneDigitalDesc",
    image: MyleneImage,
    link: "https://www.mylene-digital.fr",
  },
  {
    id: 4,
    title: "CrecheCookieKids",
    description: "CrecheCookieKidsDesc",
    image: crecheImage,
    link: "http://www.creche-cookiekids.lu",
  },
  {
    id: 5,
    title: "FrancMuller",
    description: "FrancMullerDesc",
    image: AvocatImage,
    link: "https://www.francmuller-avocat.com",
  },
  {
    id: 6,
    title: "AlphanexiaTV",
    description: "AlphanexiaTVDesc",
    image: AlphaNexiaImage,
    link: "https://alphanexia.fr/tv/",
  },
  {
    id: 7,
    title: "LandingPageMDM",
    description: "LandingPageMDMDesc",
    image: MdmImage,
    link: "https://jechangeladonne.medecinsdumonde.org/",
  },
  {
    id: 8,
    title: "NewsletterMDM",
    description: "NewsletterMDMDesc",
    image: MdmMailImage,
    link: "https://alphanexia.fr/tv/",
  },
];


export default function Projects() {
  const { formatMessage } = useIntl();
  return (
    <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto">
            <BlurText
                text={formatMessage({ id: "MyProjects" })}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-4xl font-bold text-center mb-12 flex justify-center"
            />
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-10`}
            >
              {/* Utilisation de TiltedCard */}
              <div className="w-full md:w-1/2">
                <TiltedCard
                  imageSrc={project.image}
                  altText="{project.title}"
                  captionText={project.title}
                  containerHeight="300px"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  
                />
              </div>

              {/* Texte du projet */}
                <div className="w-full md:w-1/2 text-left">
                <span className="text-5xl font-bold text-gray-500 block">
                    {String(project.id).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-bold mt-2">
                  {formatMessage({ id: project.title })}
                </h3>
                <p className="text-gray-400 mt-4">
                  {formatMessage({ id: project.description })}
                </p>

                <a
                    href={project.link}
                    className="inline-flex items-center gap-2 mt-4 transition text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={ViewProjectIcon} alt="Voir le projet" className="w-6 h-6" />
                    <span className="font-medium">Voir le projet</span>
                </a>
                </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
