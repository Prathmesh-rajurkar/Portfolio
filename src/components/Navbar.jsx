import React from "react";
import { BiBadge } from "react-icons/bi";
import { Link } from "react-scroll";
// import { NavLink } from 'react-router-dom';
import './navbar.css';
function Navbar() {
  return (
    <div id="nav" className="flex flex-row justify-between  p-5 w-[75%] font-mono">
      <div className="flex justify-center items-center">
        <BiBadge />
        <h3 className="ml-2 font-bold text-xl">Prathmesh Rajurkar</h3>
      </div>
      <div className="flex flex-row justify-between items-center w-[70%] ">
        <div className="cursor-pointer"><Link activeClass='active'
            to="home"
            spy={true}
            offset={-100}
            duration={500}
            smooth={true}>Home</Link></div>
        <div className="cursor-pointer">
          <Link
            activeClass='active'
            to="about"
            spy={true}
            offset={-100}
            duration={500}
            smooth={true}>
            About
          </Link>
        </div>
        <div className="cursor-pointer"><Link
            activeClass='active'
            to="skill"
            spy={true}
            offset={-100}
            duration={500}
            smooth={true}>
            Skills
          </Link></div>


        <div className="cursor-pointer"><Link
            activeClass='active'
            to="projects"
            spy={true}
            offset={-100}
            duration={500}
            smooth={true}>
            Projects
          </Link></div>
          <div className="cursor-pointer"><Link
            activeClass='active'
            to="portfolio"
            spy={true}
            offset={-100}
            duration={500}
            smooth={true}>
            Portfolio
          </Link></div>
          <div className="cursor-pointer"><Link
            activeClass='active'
            to="community"
            spy={true}
            offset={-100}
            duration={500}
            smooth={true}>
            Community
          </Link></div>
          <div className="cursor-pointer"><Link
            activeClass='active'
            to="contact"
            spy={true}
            offset={-100}
            duration={500}
            smooth={true}>
            Contact
          </Link></div>
      </div>
    </div>
  );
}

export default Navbar;
