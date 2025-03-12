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

const projects = [
  {
    id: 1,
    title: "Fire & Safety",
    description:
      "Site vitrine développé sous WordPress avec intégration d'un thème personnalisé et d'un formulaire de contact.",
    image: FireImage,
    link: "https://fire-safety.org",
  },
  {
    id: 2,
    title: "Trik3r-Collecte",
    description:
      "Développement d'une site dynamique responsive avec React, NestJS et Tailwind CSS. Les technologies utilisées incluent des API et Docker pour la gestion des conteneurs.",
    image: TrikerImage,
    link: "https://www.trik3r-collecte.fr",
  },
  {
    id: 3,
    title: "Mylene Digital",
    description:
      "Site  développé sous WordPress avec intégration complète du responsive, d'un thème personnalisé et d'un formulaire de contact.",
    image: MyleneImage,
    link: "https://www.mylene-digital.fr",
  },
  {
    id: 4,
    title: "Franc Muller - Avocat du travail",
    description:
      "Site  développé sous WordPress avec intégration d'un thème personnalisé, d'un blog et d'un formulaire de contact.",
    image: AvocatImage,
    link: "https://www.francmuller-avocat.com",
  },
  {
    id: 5,
    title: "Alphanexia TV",
    description:
      "Une page dynamique sous Wordpress intégrant un rafraîchissement automatique toutes les heures, avec des publicités et un lecteur Twitch responsive.",
    image: AlphaNexiaImage,
    link: "https://alphanexia.fr/tv/",
  },
  {
    id: 6,
    title: "Landing Page - Medecins du Monde",
    description:
      "Une landing page dédiée à la collecte de fonds pour une cause humanitaire, intégrant un formulaire de don et des informations clés pour les utilisateurs.",
    image: MdmImage,
    link: "https://jechangeladonne.medecinsdumonde.org/",
  },
  {
    id: 7,
    title: "Newsletter Médecins du Monde",
    description:
      "Un projet de mail responsive en MJML destiné à Médecins du Monde, intégrant des balises dynamiques comme pour personnaliser le contenu en fonction du destinataire.",
    image: MdmMailImage,
    link: "https://alphanexia.fr/tv/",
  },
];

export default function Projects() {
  return (
    <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto">
            <BlurText
                text="My Projects"
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
                    {project.title}
                </h3>
                <p className="text-gray-400 mt-4">{project.description}</p>
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
