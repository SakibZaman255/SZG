import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const GameInfoSection = () => {
  // Game info section animations
  useGSAP(() => {
    gsap.from(".game-image", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".game-info",
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".game-content > *", {
      x: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".game-info",
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });
  });

  const platforms = [
    { icon: "ri-playstation-line", name: "PlayStation 5" },
    { icon: "ri-xbox-line", name: "Xbox Series X" },
    { icon: "ri-computer-line", name: "PC" }
  ];

  return (
    <section id="story" className="game-info bg-black py-16 sm:py-20 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10">
        <div className="game-image w-full lg:w-1/2">
          <img src="./imag.png" alt="Game Image" className="w-full rounded-lg shadow-2xl" />
        </div>
        
        <div className="game-content w-full lg:w-1/2 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Enter The New Era</h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">
            In a world ravaged by technological warfare, a new power rises from the ashes. 
            You play as Nova, a highly skilled operative with mysterious abilities and a 
            forgotten past.
          </p>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">
            Navigate through sprawling neon-lit cities, desolate wastelands, and hidden 
            underground facilities as you uncover the truth about your identity and the 
            shadowy organization that created you.
          </p>
          <p className="text-base sm:text-lg mb-6 sm:mb-10">
            With a revolutionary AI system, each decision you make shapes the world around you. 
            Allies become enemies, enemies become allies, and the line between hero and villain 
            blurs with every choice.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="platform-badge flex items-center gap-2 bg-gray-800 px-3 sm:px-4 py-2 rounded-lg">
                <i className={`${platform.icon} text-xl sm:text-2xl`}></i>
                <span className="text-sm sm:text-base">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameInfoSection;