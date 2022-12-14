import React  from 'react';
import "./Experience.css";

import { themeContext } from "../../Context";
import { useContext } from "react";



const Experience = () => {

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

    return (
      <div className="experience" id='Experience'>
        <div className="achievement">
          <div className="circle" style={{ color: darkMode ? "black" : "" }}>
            250+
          </div>
          <span>DSA questions </span>
          <span>And doing more to improve</span>
        </div>
        <div className="achievement">
          <div className="circle" style={{ color: darkMode ? "black" : "" }}>
            7+
          </div>
          <span>Projects </span>
          <span>Working on more</span>
        </div>
        <div className="achievement">
          <div className="circle" style={{ color: darkMode ? "black" : "" }}>
            9
          </div>
          <span>Languages Learned </span>
          <span>While learning programing</span>
        </div>
      </div>
    );
}

export default Experience;