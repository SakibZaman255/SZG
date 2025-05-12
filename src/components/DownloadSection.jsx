import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DownloadSection = () => {
  useGSAP(() => {
    gsap.from(".download-content > *", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".download-section",
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Create an array of stars with random positions
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 3 + 1}px`,
    opacity: Math.random() * 0.8 + 0.2,
    animationDuration: `${Math.random() * 5 + 3}s`
  }));

  return (
    <section id="download" className="download-section relative py-20 sm:py-32 overflow-hidden">
      <div className="background-gradient absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      <div className="stars absolute inset-0">
        {stars.map((star) => (
          <div 
            key={star.id} 
            className="star absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              animation: `twinkle ${star.animationDuration} infinite`
            }}
          ></div>
        ))}
      </div>
      
      <div className="download-content container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold mb-4 sm:mb-6">Ready to Begin Your Journey?</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-12">
          Pre-order now and receive exclusive bonus content including character skins, 
          special weapons, and early access to the beta.
        </p>
        
        <button className="download-btn bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg sm:text-xl font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-lg hover:scale-105 transition-transform">
          Pre-Order Now
        </button>
        
        <div className="release-date mt-6 sm:mt-10 text-white">
          <p className="text-sm uppercase tracking-widest">Coming</p>
          <p className="text-2xl sm:text-3xl font-bold">OCTOBER 2025</p>
        </div>
      </div>

      {/* CSS Animation for Stars */}
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </section>
  );
};

export default DownloadSection;