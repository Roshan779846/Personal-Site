import React from "react";
import "./Skills.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
// import Resume from "../../img/resume";
import Card from "../../components/Card/Card";

import { themeContext } from "../../Context";
import { useContext } from "react";

import {motion} from 'framer-motion'

const Skills = () => {

  const transition = {duration: 1,type:'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
      <div className="skills" id='Skills'>
        {/* left side */}
        <div className="l-skills">
          <span style={{color: darkMode? 'white':''}}>My </span>
          <span>Skills</span>
          <span style={{color: darkMode? 'white':''}}>
            I have my skills in developing multithread application and
            Responsive sites.
            <br />
            Developing Frontend and Backend of the applications for multiple
            projects and in freelance.
            <br />
            In MERN stack ,Redux toolkit ,Three Js,Next Js ,RAPID API And Have
            been learning AI and ML.
            <br />
            Working on improving my problem solving skills in C++ programming
            with DSA.
            <br />
            I also have the knowledge of DBMS both in SQL databases and NO-SQL
            databases.
            <br />
            Working with different languages C, C++, JavaScript, Python, Ruby,
            HTML, CSS, SQL, JASON.
          </span>
          {/* <a href={Resume}> */}
            <button className="button s-button">Download CV</button>
          {/* </a> */}

          <div
            className="blur s-blur"
            style={{
              background: "#abf1ff94",
            }}
          ></div>
        </div>
        {/* right side */}
        <div className="cards">
          <motion.div 
          whileInView={{left:'19rem'}}
          initial={{left: '25%'}}
          transition={transition}
          style={{ left: "18rem" }}
          >
            {/* First card */}
            <Card
              emoji={HeartEmoji}
              heading={"Design"}
              details={"Figma, Canva, Adobe"}
            />
          </motion.div>
          {/* Second Card */}
          <motion.div 
          whileInView={{right:'1rem'}}
          initial={{right: '-25%'}}
          style={{ top: "10rem", left: "3rem" }}>
            <Card
              emoji={Glasses}
              heading={"Developer"}
              details={"JavaScript, HTML, CSS, REACT-MERN, Redux, Three-Js"}
            />
          </motion.div>
          {/* Third Card */}
          <motion.div 
          whileInView={{left:'19rem'}}
          initial={{left: '25%'}}
           style={{ top: "19rem", left: "18rem" }}>
            <Card
              emoji={Humble}
              heading={"Programming"}
              details={"C , C++ , JavaScript , Python , Ruby"}
            />
          </motion.div>
          <div className="blur"></div>
        </div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
    );
}


export default Skills;