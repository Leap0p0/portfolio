import React from "react";
import Particles from "./../Utils/Particles";
import BlurText from "../Utils/BlurText";

const ContactForm = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black text-white p-8 overflow-hidden">
      {/* Particles Background covering the entire screen */}
      <div className="absolute inset-0 z-0" >
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
      
      <div className="relative z-10 w-full max-w-4xl bg-opacity-50 backdrop-blur-md p-8 rounded-lg">
        <BlurText
                text="Contact Me"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-4xl font-bold text-center mb-12 flex justify-center"
            />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <form className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full p-3 border border-white bg-transparent text-white rounded-md" />
            <input type="email" placeholder="Email" className="w-full p-3 border border-white bg-transparent text-white rounded-md" />
            <input type="text" placeholder="Your website (If exists)" className="w-full p-3 border border-white bg-transparent text-white rounded-md" />
            <textarea placeholder="How can I help?*" className="w-full p-3 border border-white bg-transparent text-white rounded-md"></textarea>
            <button className="w-full bg-white text-black p-3 rounded-md font-bold">Get In Touch</button>
          </form>
          
          {/* Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold">Let's <span className="bg-white text-black px-2">talk</span> for</h2>
            <h3 className="text-4xl font-bold">Something special</h3>
            <p className="text-gray-300 mt-4">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
            <p className="mt-6 font-bold">contactwebnovation9@gmail.com</p>
            <p className="font-bold">0770039639</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
