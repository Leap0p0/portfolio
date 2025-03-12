import React from "react";
import { LocaleProvider } from "../context/LocaleContext";
import Navbar from "./Nav";
import HeroSection from "./Banner";
import SkillsGrid from "./Skills";
import Projects from "./Project";
import Testimonials from "./Testimonials";
import ContactForm from "./Contact";

function App() {
  return (
    <LocaleProvider>
      <Navbar />
      <HeroSection />
      <SkillsGrid />
      <Projects />
      <Testimonials />
      <ContactForm />
    </LocaleProvider>
  );
}

export default App;
