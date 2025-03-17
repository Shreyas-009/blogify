import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Properties from "./components/Properties";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Properties />
      <Services />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
