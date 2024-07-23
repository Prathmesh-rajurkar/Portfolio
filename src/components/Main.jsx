import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Portfolio from "./Portfolio";
import Community from "./Community";
import Contact from "./Contact";
import Footer from "./Footer";
// import Navbar from "./Navbar";

function Main() {
  return (
    <div>
      <Home />
      <About />
      <Skills/>
      <Projects/>
      <Portfolio/>
      <Community/>
      <Contact/>
    </div>
  );
}

export default Main;
