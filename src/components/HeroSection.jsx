import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = ({ isMobile }) => {
  const sectionRef = useRef(null);

  // Content animations
  useGSAP(() => {
    // Hero section animations
    gsap.from(".hero-content > *", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: "power3.out"
    });

    gsap.from(".hero-image", {
      scale: 0.8,
      opacity: 0,
      duration: 2,
      ease: "expo.out"
    });

    // Parallax effect on scroll
    gsap.to(".sky-bg", {
      y: -100,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".mountain-bg", {
      y: -50,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  });

  // Parallax effect on mouse move for hero section
  useEffect(() => {
    if (isMobile || !sectionRef.current) return;

    const handleMouseMove = (e) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
      
      gsap.to(".sky-bg", {
        x: moveX * 0.5,
        y: moveY * 0.5,
        duration: 1
      });
      
      gsap.to(".mountain-bg", {
        x: moveX * 1.2,
        y: moveY * 0.3,
        duration: 1
      });
      
      gsap.to(".hero-image", {
        x: moveX * -0.5,
        y: moveY * -0.3,
        duration: 1
      });
      
      gsap.to(".hero-title", {
        x: moveX * 0.2,
        duration: 1
      });
    };

    sectionRef.current.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="hero-section relative h-screen overflow-hidden">
      <div className="parallax-container relative w-full h-full">
        <img 
          src="./sky.png" 
          alt="Sky" 
          className="sky-bg absolute top-0 left-0 w-full h-full object-cover"
        />
        <img 
          src="./bg.png" 
          alt="Mountains" 
          className="mountain-bg absolute top-0 left-0 w-full h-full object-cover"
        />
        
        <div className="hero-content absolute inset-0 flex flex-col justify-center items-center text-white z-10 px-4 md:px-0">
          <h1 className="hero-title text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-6 drop-shadow-lg">
            LEGACY<br/>EDITION
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl text-center mb-8 drop-shadow-lg">
            A new era begins. Experience the future of gaming with our revolutionary open-world adventure.
          </p>
          <a href="#download" className="btn-primary bg-gradient-to-r from-purple-600 to-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:scale-105 transition-transform">
            Discover Now
          </a>
        </div>
        
        <img 
          src="./girlbg.png" 
          alt="Character" 
          className="hero-image absolute -bottom-5 sm:bottom-0 left-1/2 -translate-x-1/2 w-auto h-2/3 sm:h-3/4 md:h-4/5 object-contain z-20"
        />
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white z-30">
          <p className="text-sm mb-2">Scroll to explore</p>
          <i className="ri-arrow-down-line text-2xl animate-bounce"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;