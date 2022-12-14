import React from "react";
import './NavBar.css'; 
import Contact from '../Contact/Contact.jsx';
import Toggle from "../Toggle/Toggle";

import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Roshan</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="NavBar"
              smooth={true}
              activeClass="activeClass"
            >
              <li className="list">Home</li>
            </Link>
            <Link
              spy={true}
              to="Skills"
              smooth={true}
              activeClass="activeClass"
            >
              <li className="list">Skills</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeClass"
            >
              <li className="list">Experience</li>
            </Link>
            <Link
              spy={true}
              to="Projects"
              smooth={true}
              activeClass="activeClass"
            >
              <li className="list">Projects</li>
            </Link>
            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
              activeClass="activeClass"
            >
              <li className="list">Portfolio</li>
            </Link>

            {/* <li>Testimonials</li> */}
          </ul>
        </div>
        <a href={Contact}>
          <Link
          spy={true}
          to="Contact"
          smooth={true}
          activeClass="activeClass"
          >
            <button className="button n-button">Contact</button>
          </Link>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
