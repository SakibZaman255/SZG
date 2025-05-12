import React, { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import components
import IntroAnimation from "./components/IntroAnimation";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import GameInfoSection from "./components/GameInfoSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="app overflow-x-hidden">
      {/* Intro Animation Screen */}
      <IntroAnimation setShowContent={setShowContent} />

      {showContent && (
        <div className="content overflow-x-hidden">
          {/* Navigation */}
          <Navigation />

          {/* Hero Section */}
          <HeroSection isMobile={isMobile} />

          {/* Features Section */}
          <FeaturesSection />

          {/* Game Info Section */}
          <GameInfoSection />

          {/* Download Section */}
          <DownloadSection />

          {/* Footer */}
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;