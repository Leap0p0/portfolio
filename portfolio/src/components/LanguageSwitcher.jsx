import React from "react";
import { useLocale } from "../context/LocaleContext";

export default function LanguageSwitcher() {
  const { switchLanguage } = useLocale();

  return (
    <div className="flex space-x-4 mb-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => switchLanguage("fr")}
      >
        🇫🇷 FR
      </button>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded-lg"
        onClick={() => switchLanguage("en")}
      >
        🇬🇧 EN
      </button>
    </div>
  );
}
