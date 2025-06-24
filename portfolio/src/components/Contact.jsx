import React from "react";
import Particles from "../Utils/Particles";
import BlurText from "../Utils/BlurText";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";

const CalendlyForm = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black text-white p-8 overflow-hidden">
      {/* Particles en fond */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Calendly container animé */}
      <motion.div
        id="calendly-widget"
        className="relative z-10 w-full max-w-4xl bg-opacity-50 backdrop-blur-md p-8 rounded-lg"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <BlurText
          text="Plan a Meeting"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl font-bold text-center mb-12 flex justify-center"
        />

        <div className="w-full">
          <InlineWidget
            url="https://calendly.com/contactwebnovation9/30min?background_color=1a1a1a&text_color=ffffff&primary_color=ccced0"
            styles={{ minWidth: "320px", height: "1200px", borderRadius: "12px" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default CalendlyForm;
