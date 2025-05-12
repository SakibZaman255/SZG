import React from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  const socialLinks = [
    { icon: "ri-twitter-fill", href: "#", hoverColor: "text-blue-400" },
    { icon: "ri-instagram-line", href: "#", hoverColor: "text-purple-500" },
    { icon: "ri-youtube-fill", href: "#", hoverColor: "text-red-500" },
    { icon: "ri-discord-fill", href: "#", hoverColor: "text-blue-600" }
  ];

  return (
    <footer className="bg-black text-white py-8 sm:py-10 px-4 md:px-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="logo mb-6 md:mb-0 flex items-center">
            <div className="logo-lines flex flex-col gap-1 mr-3">
              <div className="line w-6 h-1 bg-white"></div>
              <div className="line w-4 h-1 bg-white"></div>
              <div className="line w-2 h-1 bg-white"></div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold">Sakib Zaman Gaming</h3>
          </div>
          
          <div className="social-icons flex gap-5 sm:gap-6 mb-6 md:mb-0">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className={`text-xl sm:text-2xl hover:${link.hoverColor} transition-colors`}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
          
          <div className="text-xs sm:text-sm text-center md:text-right text-gray-400">
            © 2025 Sakib Zaman Gaming. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;