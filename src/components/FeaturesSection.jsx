import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card bg-gray-800 bg-opacity-50 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-gray-700">
      <i className={`${icon} text-3xl sm:text-4xl mb-4`}></i>
      <h3 className="text-xl sm:text-2xl text-white font-bold mb-3">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  // Features section animation
  useGSAP(() => {
    gsap.from(".features-title", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ".features-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".feature-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".features-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  const features = [
    {
      icon: "ri-landscape-line text-blue-400",
      title: "Vast Open World",
      description: "Explore a massive, detailed world with dynamic weather and day-night cycles that affect gameplay."
    },
    {
      icon: "ri-user-star-line text-purple-400",
      title: "Character Evolution",
      description: "Develop your character with unique skills and abilities that adapt to your playstyle."
    },
    {
      icon: "ri-sword-line text-red-400",
      title: "Combat System",
      description: "Experience fluid, responsive combat with innovative mechanics and devastating special moves."
    },
    {
      icon: "ri-community-line text-green-400",
      title: "Multiplayer",
      description: "Team up with friends or compete against rivals in seamless multiplayer experiences."
    },
    {
      icon: "ri-film-line text-yellow-400",
      title: "Cinematic Story",
      description: "Immerse yourself in a captivating narrative with branching storylines and memorable characters."
    },
    {
      icon: "ri-vip-crown-line text-orange-400",
      title: "Exclusive Content",
      description: "Access special missions, cosmetics, and gear that enhance your gaming experience."
    }
  ];

  return (
    <section id="features" className="features-section bg-gradient-to-b from-black to-gray-900 py-16 sm:py-20 px-4 md:px-10 lg:px-20">
      <h2 className="features-title text-3xl sm:text-4xl md:text-5xl text-center text-white font-bold mb-10 sm:mb-16">Revolutionary Features</h2>
      
      <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;