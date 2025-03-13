import React, { useState } from "react";
import Particles from "./../Utils/Particles";
import BlurText from "../Utils/BlurText";
import { motion } from "framer-motion"; // Importer motion pour l'animation

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification que tous les champs sont remplis
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Please fill in all the fields.");
      return;
    }

    // Données à envoyer à l'API Brevo
    const emailData = {
      sender: { email: "contactwebnovation9@gmail.com" },
      to: [{ email: "contactwebnovation9@gmail.com" }],
      subject: "Contact Form Submission",
      htmlContent: `
        <h3>Message from ${formData.name}</h3>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Website:</strong> ${formData.website}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    };

    // Envoi de la requête à l'API Brevo
    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "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", // Remplace par ta clé API Brevo
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", website: "", message: "" });
      } else {
        setStatusMessage("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("An error occurred while sending your message. Please try again later.");
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black text-white p-8 overflow-hidden">
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

      <motion.div
        id="contact-form"
        className="relative z-10 w-full max-w-4xl bg-opacity-50 backdrop-blur-md p-8 rounded-lg"
        initial={{ opacity: 0, y: -100 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Final state
        transition={{ duration: 0.8 }} // Durée de l'animation
      >
        <BlurText
          text="Contact Me"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl font-bold text-center mb-12 flex justify-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-3 border border-white bg-transparent text-white rounded-md"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border border-white bg-transparent text-white rounded-md"
            />
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Your website (If exists)"
              className="w-full p-3 border border-white bg-transparent text-white rounded-md"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help?*"
              className="w-full p-3 border border-white bg-transparent text-white rounded-md"
            ></textarea>
            <button type="submit" className="w-full bg-white text-black p-3 rounded-md font-bold">
              Get In Touch
            </button>
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

        {/* Affichage du message de statut */}
        {statusMessage && (
          <div className="mt-4 text-center text-white bg-gray-800 p-3 rounded">
            {statusMessage}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm;
