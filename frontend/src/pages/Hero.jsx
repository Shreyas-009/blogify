import React from "react";
import background from "../assets/Hero/Background.png";
import logo from "../assets/Logo/logo.svg";

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
      id="home"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Main content - positioned to account for navbar */}
      <div
        className="relative max-w-[1280px] mx-auto h-full flex flex-col justify-center items-center text-white px-4"
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          minHeight: "100vh",
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center leading-tight">
          FIND YOUR DREAM HOUSE
        </h1>
        <p className="text-center text-base sm:text-lg md:text-xl mb-6 md:mb-10 max-w-4xl px-2 sm:px-6">
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-8 md:mb-12 w-full sm:w-auto px-4">
          <button className="bg-transparent border-2 border-white text-white px-4 sm:px-8 py-3 rounded uppercase text-xs sm:text-sm font-semibold hover:bg-white hover:text-black transition w-full sm:w-auto">
            WHAT'S MY HOME WORTH
          </button>
          <button className="bg-transparent border-2 border-white text-white px-4 sm:px-8 py-3 rounded uppercase text-xs sm:text-sm font-semibold hover:bg-white hover:text-black transition w-full sm:w-auto">
            WORK WITH KRYSTELLE
          </button>
        </div>

        <div className="w-full max-w-3xl px-4 sm:px-6">
          <div className="flex flex-nowrap overflow-hidden bg-zinc-300 gap-1 sm:gap-2 rounded-md p-2">
            <input
              type="text"
              placeholder="Enter an address, city or neighborhood"
              className="flex-grow bg-white rounded-md px-2 sm:px-3 md:px-5 py-3 md:py-4 focus:outline-none text-black text-xs sm:text-sm md:text-base min-w-0"
            />
            <button className="bg-[#096CC9] text-white rounded-md px-2 sm:px-4 md:px-10 py-3 md:py-4 uppercase text-xs md:text-sm font-bold whitespace-nowrap hover:bg-blue-700 transition flex-shrink-0">
              SEARCH LISTINGS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
