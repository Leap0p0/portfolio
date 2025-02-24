import React from "react";
import { LocaleProvider } from "../context/LocaleContext";
import Navbar from "./Nav";
import HeroSection from "./Banner";
import SkillsGrid from "./Skills";

function App() {
  return (
    <LocaleProvider>
      <Navbar />
      <HeroSection />
      <SkillsGrid />
    </LocaleProvider>
  );
}

export default App;
