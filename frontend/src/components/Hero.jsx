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
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
          FIND YOUR DREAM HOUSE
        </h1>
        <p className="text-center text-xl mb-10 max-w-4xl">
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.
        </p>

        <div className="flex flex-col md:flex-row gap-5 mb-12">
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded uppercase text-sm font-semibold hover:bg-white hover:text-black transition">
            WHAT'S MY HOME WORTH
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded uppercase text-sm font-semibold hover:bg-white hover:text-black transition">
            WORK WITH KRYSTELLE
          </button>
        </div>

        <div className="w-full max-w-2xl">
          <div className="flex overflow-hidden bg-zinc-300 gap-2 rounded-md p-2">
            <input
              type="text"
              placeholder="Enter an address, city or neighborhood"
              className="flex-grow bg-white rounded-md px-5 py-4 focus:outline-none text-black"
            />
            <button className="bg-[#096CC9] text-white rounded-md px-10 py-4 uppercase text-sm font-bold hover:bg-blue-700 transition">
              SEARCH LISTINGS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
