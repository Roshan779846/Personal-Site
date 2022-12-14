import React from "react";
import "./Projects.css";
import MusicLogo from "../../img/logo.svg";
import MySite from "../../img/Roshan.png";
import TodoList from "../../img/TodoList.png";
import TravelLogo from "../../img/TravelLogo.png"

import { themeContext } from "../../Context";
import { useContext } from "react";

const Projects = () =>{

     const theme = useContext(themeContext);
     const darkMode = theme.state.darkMode;

    return (
      <div className="projects" id="Projects">
        <div className="l-skills">
          <span style={{ color: darkMode ? "white" : "" }}>My </span>
          <span>Projects</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            I have my skills in developing multithread application and
            Responsive sites.
            <br />
            Developing Frontend and Backend of the applications for multiple
            projects and in freelance.
            <br />
            I have developed Music-App. By using React, Redux, Rapid API,
            Tailwind CSS, Vite, and Node JS.
            <br />
            I have developed the travel Guid/Info App with React and Api
            Integration.
            <br />
            I have developed A to do list fully working application during my
            learning period.
            <br />
            And I also have made 3 personal sites for my self during learning
            period.
            <br />
            And Currently i am working on banking app an projects that i got
            form freelance.
          </span>
          <button className="button s-button">Hire me</button>
          <div
            className="blur s-blur"
            style={{
              background: "#abf1ff94",
            }}
          ></div>
        </div>

        <div className="p-right">
          <div className="p-mainCircle">
            <div className="p-secCircle">
              <img
                src={MusicLogo}
                alt=""
                style={{ width: "70px", height: "70px" }}
              ></img>
            </div>
            <div className="p-secCircle">
              <img
                src={MySite}
                alt=""
                style={{ width: "140px", height: "140px" }}
              ></img>
            </div>
            <div className="p-secCircle">
              <img
                src={TodoList}
                alt=""
                style={{ width: "70px", height: "70px" }}
              ></img>
            </div>
            <div className="p-secCircle">
              <img
                src={TravelLogo}
                alt=""
                style={{ width: "140px", height: "140px" }}
              ></img>
            </div>
          </div>
          {/* background circles */}
          <div className="p-backCircle blueCircle"></div>
          <div className="p-backCircle yellowCircle"></div>
        </div>
      </div>
    );
}

export default Projects;