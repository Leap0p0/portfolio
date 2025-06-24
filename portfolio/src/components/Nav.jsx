import { useState, useEffect } from "react";
import { useLocale } from "../context/LocaleContext";
import { useIntl } from "react-intl"; // Import de useIntl pour accéder aux traductions
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0); // Suivre la position de défilement
  const { locale, switchLanguage } = useLocale(); // Récupère la langue et la fonction pour changer
  const { formatMessage } = useIntl(); // Utilise le hook pour récupérer les traductions

  // Fonction pour obtenir l'étiquette de la langue
  const getLanguageLabel = (lang) => (lang === "fr" ? "🇫🇷 FR" : "🇬🇧 EN");

  // Surveiller la position de défilement de la page
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    // Nettoyer l'écouteur d'événements au démontage
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculer la transparence en fonction du défilement
  const transparency = Math.min(scrollY / 300, 0.8); // La transparence augmente au fur et à mesure du défilement

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300"
      style={{
        backgroundColor: "rgba(255, 255, 255, 1)", // Si l'utilisateur défile, fond noir transparent
      }}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Menu centré */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
          <Link to="skills-slide" smooth={true} duration={500} className="text-lg font-medium hover:text-gray-400">
            {formatMessage({ id: "skills" })}
          </Link>
          <Link to="project-slide" smooth={true} duration={500} className="text-lg font-medium hover:text-gray-400">
            {formatMessage({ id: "projects" })}
          </Link>
          <Link to="contact-form" smooth={true} duration={500} className="text-lg font-medium hover:text-gray-400">
            {formatMessage({ id: "contact" })}
          </Link>
        </div>

        {/* Bouton Menu Dropdown à droite */}
        <div className="ml-auto relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none bg-black px-5 py-2 rounded-none text-white"
          >
            {getLanguageLabel(locale)} {/* Affiche le label de la langue */}
          </button>

          {/* Menu déroulant */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded-none shadow-lg">
              <button
                onClick={() => {
                  switchLanguage("fr");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-white hover:text-black"
              >
                🇫🇷 FR
              </button>
              <button
                onClick={() => {
                  switchLanguage("en");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-white hover:text-black"
              >
                🇬🇧 EN
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
