import React from "react";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Footer from "./pages/Footer";

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
