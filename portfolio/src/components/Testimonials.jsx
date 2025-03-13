import React, { useState } from "react";
import BlurText from "./../Utils/BlurText";
import codeurImage from "./../img/rlcyvis1h95zhkvdw33b5w5q5bve.webp";
import StarIcon from "./../img/Vector.svg";
import { useIntl } from "react-intl";

const testimonials = [
  {
    name: "la4a9270b",
    image: codeurImage,
    textId: "testimonial1_text",
  },
  {
    name: "ef49f1964",
    image: codeurImage,
    textId: "testimonial2_text",
  },
  {
    name: "x40a77b3c",
    image: codeurImage,
    textId: "testimonial3_text",
  },
];

const TestimonialCard = ({ testimonial, isActive, role, text }) => {
  return (
    <div
      className={`p-6 rounded-2xl transition-all shadow-lg h-full flex flex-col justify-between ${
        isActive ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative w-16 h-16 mb-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full border-2 border-gray-300"
          />
          <div className="absolute bottom-0 right-0 bg-black text-white w-6 h-6 flex items-center justify-center rounded-full">
            "
          </div>
        </div>
        <p className="mb-4 text-sm min-h-20">{text}</p>
        <hr className="w-12 border-t border-gray-300 my-2" />
        <h3 className="font-bold">{testimonial.name}</h3>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { formatMessage } = useIntl();
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="text-center py-10">
      <BlurText
        text={formatMessage({ id: "MyTestimonial" })}
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl font-bold text-black text-center mb-12 flex justify-center"
      />
      <div className="flex justify-center gap-6 max-w-6xl mx-auto items-stretch">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="cursor-pointer w-1/3"
            onClick={() => setActiveIndex(index)}
          >
            <TestimonialCard
              testimonial={testimonial}
              isActive={index === activeIndex}
              role={formatMessage({ id: "testimonial_role" })}
              text={formatMessage({ id: testimonial.textId })}
            />
          </div>
        ))}
      </div>
      <a
        href="https://www.codeur.com/-p0p0/evaluations"
        className="inline-flex items-center gap-2 mt-4 transition text-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={StarIcon} alt={formatMessage({ id: "view_more_reviews" })} className="w-6 h-6" />
        <span className="font-medium">{formatMessage({ id: "view_more_reviews" })}</span>
      </a>
    </div>
  );
};

export default Testimonials;
