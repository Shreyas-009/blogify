import React, { useState } from "react";
import linkedin from "../assets/socialmedia_icons/linkedin.svg";
import facebook from "../assets/socialmedia_icons/facebook.svg";
import instagram from "../assets/socialmedia_icons/instagram.svg";
import twitter from "../assets/socialmedia_icons/twitter.svg";
import youtube from "../assets/socialmedia_icons/youtube.svg";
import pinterest from "../assets/socialmedia_icons/pinterest.svg";
import contact from "../assets/socialmedia_icons/contact.svg";
import logo from "../assets/Logo/logo.svg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 100, // Offset for navbar height
        behavior: "smooth",
      });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <nav className="w-full absolute top-0 left-0 z-10">
      {/* Top Social Bar */}
      <div className="border-b border-[#CECECE4D] bg-transparent hidden sm:block">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border-r border-[#CECECE4D] transition-all duration-300 hover:bg-blue-800"
            >
              <img src={facebook} alt="facebook" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border-r border-[#CECECE4D] transition-all duration-300 hover:bg-blue-400"
            >
              <img src={twitter} alt="twitter" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border-r border-[#CECECE4D] transition-all duration-300 hover:bg-blue-700"
            >
              <img src={linkedin} alt="linkedin" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border-r border-[#CECECE4D] transition-all duration-300 hover:bg-red-700"
            >
              <img src={pinterest} alt="pinterest" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border-r border-[#CECECE4D] transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
            >
              <img src={instagram} alt="instagram" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border-r border-[#CECECE4D] transition-all duration-300 hover:bg-red-600"
            >
              <img src={youtube} alt="youtube" className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-center text-white border-l border-r border-[#CECECE4D] h-11 pr-4 pl-3">
            <a
              href="mailto:contact@krstelleromy.com"
              className="flex items-center hover:text-blue-300 transition-colors"
            >
              <img src={contact} alt="contact" className="mr-2" />
              <span className="text-sm">contact@krstelleromy.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="py-4 md:py-6">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <div className="mr-3">
              <img
                src={logo}
                alt="Krystelle Romy"
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </div>
            <div className="text-white">
              <h1 className="font-bold text-base md:text-lg uppercase">
                Krystelle Romy
              </h1>
              <p className="text-xs uppercase tracking-wider">Residence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="uppercase text-base font-bold text-white hover:text-blue-300 transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              href="#sell"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("sell");
              }}
              className="uppercase text-base font-bold text-white hover:text-blue-300 transition-colors cursor-pointer"
            >
              Sell
            </a>
            <a
              href="#buy"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="uppercase text-base font-bold text-white hover:text-blue-300 transition-colors cursor-pointer"
            >
              Buy
            </a>
            <a
              href="#listings"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("sell");
              }}
              className="uppercase text-base font-bold text-white hover:text-blue-300 transition-colors cursor-pointer"
            >
              Active Listings
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="uppercase text-base font-bold text-white hover:text-blue-300 transition-colors cursor-pointer"
            >
              Contact
            </a>
            <a
              href="#blogs"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("blogs");
              }}
              className="uppercase text-base font-bold text-white hover:text-blue-300 transition-colors cursor-pointer"
            >
              Blogs
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 absolute w-full py-4">
            <div className="flex flex-col items-center gap-4 px-4">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
                className="uppercase text-base font-bold text-white hover:text-blue-300 transition-colors cursor-pointer w-full text-center py-2 border-b border-gray-700"
              >
                Home
              </a>
              <a
                href="#sell"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("sell");
                }}
                className="uppercase text-base font-bold text-white hover:text-blue-300 transition-colors cursor-pointer w-full text-center py-2 border-b border-gray-700"
              >
                Sell
              </a>
              <a
                href="#buy"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                className="uppercase text-base font-bold text-white hover:text-blue-300 transition-colors cursor-pointer w-full text-center py-2 border-b border-gray-700"
              >
                Buy
              </a>
              <a
                href="#listings"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("sell");
                }}
                className="uppercase text-base font-bold text-white hover:text-blue-300 transition-colors cursor-pointer w-full text-center py-2 border-b border-gray-700"
              >
                Active Listings
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="uppercase text-base font-bold text-white hover:text-blue-300 transition-colors cursor-pointer w-full text-center py-2 border-b border-gray-700"
              >
                Contact
              </a>
              <a
                href="#blogs"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("blogs");
                }}
                className="uppercase text-base font-bold text-white hover:text-blue-300 transition-colors cursor-pointer w-full text-center py-2 border-b border-gray-700"
              >
                Blogs
              </a>

              {/* Mobile Contact Email */}
              <a
                href="mailto:contact@krstelleromy.com"
                className="flex items-center justify-center hover:text-blue-300 transition-colors text-white mt-2"
              >
                <img src={contact} alt="contact" className="mr-2" />
                <span className="text-sm">contact@krstelleromy.com</span>
              </a>

              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <a
                  href="#"
                  className="text-white hover:text-blue-800 transition-colors"
                >
                  <img src={facebook} alt="facebook" className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <img src={twitter} alt="twitter" className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-red-500 transition-colors"
                >
                  <img src={instagram} alt="instagram" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
