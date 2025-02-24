import { useState } from "react";
import { useLocale } from "../context/LocaleContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, switchLanguage } = useLocale(); // Récupère la langue actuelle et la fonction pour changer

  const getLanguageLabel = (lang) => (lang === "fr" ? "🇫🇷 FR" : "🇬🇧 EN");

  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Menu centré */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
          <a href="#home" className="text-lg font-medium hover:text-gray-400">A propos</a>
          <a href="#skills" className="text-lg font-medium hover:text-gray-400">Skills</a>
          <a href="#project" className="text-lg font-medium hover:text-gray-400">Mes projets</a>
          <a href="#contact" className="text-lg font-medium hover:text-gray-400">Me contacter</a>
        </div>

        {/* Bouton Menu Dropdown à droite */}
        <div className="ml-auto relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none bg-black px-5 py-2 rounded-none text-white"
          >
            {getLanguageLabel(locale)}
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
