import React from "react";
import { FormattedMessage } from "react-intl";
import { LocaleProvider } from "../context/LocaleContext";
import LanguageSwitcher from "./LanguageSwitcher";
import SplitText from "../Utils/SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

function App() {
  return (
    <LocaleProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <header className="bg-white shadow-lg rounded-lg p-6 text-center">
          <LanguageSwitcher />

          <p className="text-lg text-gray-700">
            <FormattedMessage
              id="edit_text"
              values={{ code: <code className="font-mono text-blue-500">src/App.js</code> }}
            />
          </p>

          <a
            className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="learn_react" />
          </a>

          <SplitText
            text="Hello, Tailwind!"
            className="text-2xl font-semibold text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </header>
      </div>
    </LocaleProvider>
  );
}

export default App;
