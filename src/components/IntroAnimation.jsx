import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const IntroAnimation = ({ setShowContent }) => {
  // Initial animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".letter", {
      opacity: 0,
      y: 100,
      stagger: 0.15,
      duration: 1.2,
      ease: "back.out(1.7)"
    })
    .to(".letter", {
      y: -20,
      opacity: 0,
      stagger: 0.1,
      delay: 0.5,
      duration: 0.8,
      ease: "power2.in"
    })
    .to(".intro-screen", {
      scale: 20,
      opacity: 0,
      duration: 1.5,
      ease: "power4.inOut",
      onComplete: () => {
        setShowContent(true);
        document.querySelector(".intro-screen").style.display = "none";
      }
    }, "-=0.5");
  });

  return (
    <div className="intro-screen fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black z-50">
      <div className="intro-text flex">
        <div className="letter text-white text-7xl sm:text-9xl md:text-[14rem] font-bold">S</div>
        <div className="letter text-white text-7xl sm:text-9xl md:text-[14rem] font-bold">Z</div>
        <div className="letter text-white text-7xl sm:text-9xl md:text-[14rem] font-bold">G</div>
      </div>
    </div>
  );
};

export default IntroAnimation;