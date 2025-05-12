import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-4 py-6 md:px-10 flex justify-between items-center">
      <div className="logo flex items-center">
        <div className="logo-lines flex flex-col gap-1 mr-3">
          <div className="line w-8 h-1 bg-white"></div>
          <div className="line w-5 h-1 bg-white"></div>
          <div className="line w-3 h-1 bg-white"></div>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Sakib Zaman Gaming</h3>
      </div>
      
      <div className="nav-links hidden md:flex gap-8 text-white text-lg">
        <a href="#features" className="hover:text-yellow-400 transition-colors">Features</a>
        <a href="#story" className="hover:text-yellow-400 transition-colors">Story</a>
        <a href="#download" className="hover:text-yellow-400 transition-colors">Download</a>
      </div>
      
      <button 
        className="md:hidden text-white text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu absolute top-full left-0 w-full bg-black bg-opacity-90 py-6 px-4 flex flex-col gap-4 md:hidden">
          <a 
            href="#features" 
            className="text-white text-lg py-2 hover:text-yellow-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#story" 
            className="text-white text-lg py-2 hover:text-yellow-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Story
          </a>
          <a 
            href="#download" 
            className="text-white text-lg py-2 hover:text-yellow-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Download
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;