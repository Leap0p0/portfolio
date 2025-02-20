import React, { createContext, useState, useContext } from "react";
import { IntlProvider } from "react-intl";
import fr from "../locales/fr.json";
import en from "../locales/en.json";

const LocaleContext = createContext();

const messages = { fr, en };

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("fr");

  const switchLanguage = (lang) => {
    setLocale(lang);
  };

  return (
    <LocaleContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
