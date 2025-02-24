import React, { createContext, useContext, useState } from "react";
import { IntlProvider } from "react-intl";
import messagesFr from "../locales/fr.json";
import messagesEn from "../locales/en.json";

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState("fr");
  const messages = locale === "fr" ? messagesFr : messagesEn;

  const switchLanguage = (lang) => {
    setLocale(lang);
  };

  return (
    <LocaleContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  return useContext(LocaleContext);
};
