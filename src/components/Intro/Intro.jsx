import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
// import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
// import glassesimoji from "../../img/glassesimoji.png";
import MyImage from "../../img/My-img3.png";
import Graph1 from "../../img/graph1.png";
import Graph2 from "../../img/graph2.png";
import Graph3 from "../../img/graph3.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

import { themeContext } from "../../Context";
import { useContext } from "react";



const Intro = () => {

 

 const theme = useContext(themeContext);
 const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style = {{color: darkMode? 'white': ''}}>Hy! I am</span>
          <span>Roshan More</span>
          <span>
            Fullstack Developer with developing experience on MERN stack,
            designing and creating responsive sites.
          </span>
        </div>

        <button className="button i-button">Hire me</button>

        <div className="i-icons">
          <a href="https://github.com/Roshan779846">
            <img src={Github} alt=""></img>
          </a>
          <a href="https://www.linkedin.com/in/roshan-more-b8126822a/">
            <img src={LinkedIn} alt=""></img>
          </a>
          <a href="https://www.instagram.com/roshanmore1271/">
            <img src={Instagram} alt=""></img>
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt=""></img>
        <img src={Vector2} alt=""></img>
        <img className="MyImage" src={MyImage} alt=""></img>
        <img src={Graph1} alt=""></img>
        <img src={Graph2} alt=""></img>
        <img src={Graph3} alt=""></img>
        <div className="floating-div" style={{top:'4%'  ,left:'62%', opacity:'90%'}}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        {/* blur divs */}
        <div className="blur" style={{background:"rgb(238 210 225 )"}}></div>
        <div className="blur" style={{
            background:'#c1f5ff',
            top:'15rem',
            width:'21rem',
            height:'11rem',
            left:"-10rem"
        }}></div>
      </div>
    </div>
  );
};

export default Intro;
