import React from "react";
import linkedin from "../assets/socialmedia_icons/linkedin.svg";
import facebook from "../assets/socialmedia_icons/facebook.svg";
import instagram from "../assets/socialmedia_icons/instagram.svg";
import twitter from "../assets/socialmedia_icons/twitter.svg";
import youtube from "../assets/socialmedia_icons/youtube.svg";
import pinterest from "../assets/socialmedia_icons/pinterest.svg";
import contact from "../assets/socialmedia_icons/contact.svg";
import logo from "../assets/Logo/logo.svg";

const Navbar = () => {
  return (
    <nav className="w-full absolute top-0 left-0 z-10">
      <div className="border-b border-[#CECECE4D] bg-transparent">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center justify-center">
              <img src={facebook} alt="facebook" className="" />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img src={twitter} alt="twitter" className="" />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img src={linkedin} alt="linkedin" className="" />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img src={pinterest} alt="pinterest" className="" />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img src={instagram} alt="instagram" className="" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center border-r border-[#CECECE4D]"
            >
              <img src={youtube} alt="youtube" className="" />
            </a>
          </div>
          <div className="flex items-center text-white border-l border-r border-[#CECECE4D] h-11 pr-4 pl-3">
            <a
              href="mailto:contact@krstelleromy.com"
              className="flex items-center"
            >
              <img src={contact} alt="contact" className="mr-2" />
              <span className="text-sm">contact@krstelleromy.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="py-6">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <div className="mr-3">
              <img src={logo} alt="Krystelle Romy" className="w-12 h-12" />
            </div>
            <div className="text-white">
              <h1 className="font-bold text-lg uppercase">Krystelle Romy</h1>
              <p className="text-xs uppercase tracking-wider">Residence</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="uppercase text-base font-bold text-white hover:text-blue-300"
            >
              Home
            </a>
            <a
              href="#sell"
              className="uppercase text-base font-bold text-white hover:text-blue-300"
            >
              Sell
            </a>
            <a
              href="#buy"
              className="uppercase text-base font-bold text-white hover:text-blue-300"
            >
              Buy
            </a>
            <a
              href="#listings"
              className="uppercase text-base font-bold text-white hover:text-blue-300"
            >
              Active Listings
            </a>
            <a
              href="#contact"
              className="uppercase text-base font-bold text-white hover:text-blue-300"
            >
              Contact
            </a>
            <a
              href="#blogs"
              className="uppercase text-base font-bold text-white hover:text-blue-300"
            >
              Blogs
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button className="text-white hover:text-gray-300 focus:outline-none">
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
      </div>
    </nav>
  );
};

export default Navbar;
