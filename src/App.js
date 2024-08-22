import React from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Landing/Hero";
import About from "./components/Landing/About";
import Skills from "./components/Landing/Skills";
import MyWork from "./components/Landing/MyWork";
import Contact from "./components/Landing/Contact/Contact";
import Footer from "./components/Layout/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
