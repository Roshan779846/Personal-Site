import React from "react";
import './Card.css';

import { themeContext } from "../../Context";
import { useContext } from "react";

const Card = ({emoji,heading,details}) => {

 const theme = useContext(themeContext);
 const darkMode = theme.state.darkMode;

    return (
      <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span style={{ color: darkMode ? "white" : "" }}>{details}</span>
        <button className="c-button">LEARN MORE</button>
      </div>
    );
}


export default Card;