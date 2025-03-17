import React from "react";
import Agent from "../assets/About/Agent.png";

const About = () => {
  return (
    <div className="max-w-[1280px] mx-auto py-20 px-4 bg-white">
      <div className="flex flex-col  md:flex-row items-center gap-16">
        <div className="w-full md:w-2/5">
          <img
            src={Agent}
            alt="Krystelle Romy"
            className="rounded-md w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            MEET KRYSTELLE ROMY
          </h2>
          <p className="text-gray-700 text-base  mb-6 leading-relaxed text-left">
            Helping you achieve your real estate goals is my top priority. When
            we work together, it is about YOU. I listen to your needs, work
            diligently to achieve your objectives, and strive to always exceed
            your expectations.
          </p>
          <p className="text-gray-700 text-base leading-relaxed text-left">
            Krystelle's outcomes driven approach, uprightness, and genuineness
            have procured him top-maker status and 5-star surveys from his
            clients. He uses the most important innovation, custom advertising
            methodologies, and top to bottom market information to acquire an
            edge over different specialists. Krystelle pays attention to his
            clients' objectives, lays out a customized made arrangement, and
            imparts constantly bringing about an astounding encounter beginning
            to end. He highly esteems his own assistance and consideration
            regarding everything about… that trading land are presumably
            probably the most close to home and huge occasions in their lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
