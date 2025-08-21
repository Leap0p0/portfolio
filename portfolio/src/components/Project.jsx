import React, { useState } from "react";
import TiltedCard from "./../Utils/TiltedCard";
import FireImage from "./../img/s0fj94przed8fvz7amsplwwb7aqk.png";
import TrikerImage from "./../img/Capture d’écran 2025-03-01 à 18-compressed-2.jpg";
import AvocatImage from "./../img/Capture d’écran 2025-03-01 à 18-compressed.jpg";
import MyleneImage from "./../img/image.png";
import BlurText from "../Utils/BlurText";
import SmartkidsImage from "./../img/smartkids.png";
import AlphaNexiaImage from "./../img/alphanexia.jpg";
import MdmImage from "./../img/image copy.png";
import VanillyaImage from "./../img/vanillya.png";
import BSLYKImage from "./../img/bslyk.png";
import MdmMailImage from "./../img/image copy 2.png";
import MypatchImage from "./../img/my-patch.fr.png";
import ViewProjectIcon from "./../img/export.svg";
import crecheImage from "./../img/image copy 3.png";
import TspImage from "./../img/tsp.webp"
import SushiImage from "./../img/sushi.webp";
import ThaiImage from "./../img/cotethai.webp";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";

const allProjects = [
  {
    id: 1,
    title: "FireSafety",
    description: "FireSafetyDesc",
    image: FireImage,
    link: "https://fire-safety.org",
    category: "WordPress",
  },
  {
    id: 2,
    title: "TrikerCollecte",
    description: "TrikerCollecteDesc",
    image: TrikerImage,
    link: "https://www.trik3r-collecte.fr",
    category: "Code",
  },
  {
    id: 3,
    title: "Tsp",
    description: "TspDesc",
    image: TspImage,
    link: "https://www.tsp.pf/",
    category: "WordPress",
  },
  {
    id: 4,
    title: "Sushi",
    description: "SushiDesc",
    image: SushiImage,
    link: "https://www.sushi-marguerite-asie.fr/",
    category: "WordPress",
  },
  {
    id: 3,
    title: "MyleneDigital",
    description: "MyleneDigitalDesc",
    image: MyleneImage,
    link: "https://www.mylene-digital.fr",
    category: "WordPress",
  },
  {
    id: 5,
    title: "CrecheCookieKids",
    description: "CrecheCookieKidsDesc",
    image: crecheImage,
    link: "http://www.creche-cookiekids.lu",
    category: "Code",
  },
  {
    id: 6,
    title: "FrancMuller",
    description: "FrancMullerDesc",
    image: AvocatImage,
    link: "https://www.francmuller-avocat.com",
    category: "WordPress",
  },
  {
    id: 7,
    title: "AlphanexiaTV",
    description: "AlphanexiaTVDesc",
    image: AlphaNexiaImage,
    link: "https://alphanexia.fr/tv/",
    category: "WordPress",
  },
  {
    id: 8,
    title: "LandingPageMDM",
    description: "LandingPageMDMDesc",
    image: MdmImage,
    link: "https://jechangeladonne.medecinsdumonde.org/",
    category: "Code",
  },
  {
    id: 9,
    title: "NewsletterMDM",
    description: "NewsletterMDMDesc",
    image: MdmMailImage,
    link: "https://alphanexia.fr/tv/",
    category: "Code",
  },
  {
    id: 10,
    title: "Mypatch",
    description: "MypatchDesc",
    image: MypatchImage,
    link: "https://my-patch.fr",
    category: "Shopify",
  },
  {
    id: 11,
    title: "Vanillya",
    description: "VanillyaDesc",
    image: VanillyaImage,
    link: "https://vanillya.co",
    category: "Shopify",
  },
  {
    id: 12,
    title: "BSLYK",
    description: "BSLYKDesc",
    image: BSLYKImage,
    link: "https://bslyk.fr",
    category: "WordPress",
  },
  {
    id: 13,
    title: "Smartkids",
    description: "SmartkidsDesc",
    image: SmartkidsImage,
    link: "https://smartkidsapp.com",
    category: "Code",
  },
  {
    id: 14,
    title: "Thai",
    description: "ThaiDesc",
    image: ThaiImage,
    link: "https://www.cote-thai.fr/",
    category: "WordPress",
  },
];

const categories = ["All", "WordPress", "Shopify", "Code"];

export default function Projects() {
  const { formatMessage } = useIntl();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <section id="project-slide" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto">
        <BlurText
          text={formatMessage({ id: "MyProjects" })}
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl font-bold text-center mb-12 flex justify-center"
        />

        {/* Filtres de catégories */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === cat
                  ? "bg-white text-black"
                  : "border-white text-white hover:bg-white hover:text-black"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Liste des projets animée */}
        <motion.div
          
          className="space-y-16"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-10`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <TiltedCard
                  imageSrc={project.image}
                  altText={project.title}
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

              {/* Texte */}
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
        </motion.div>
      </div>
    </section>
  );
}
