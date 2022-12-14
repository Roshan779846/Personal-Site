import React, { useState } from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';
import {useRef} from 'react';

import { themeContext } from "../../Context";
import { useContext } from "react";


const Contact = () =>{

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

    // Email js Integration

const form = useRef();

const [done , setDone] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_dpht138",
      "template_7jage5d",
      form.current,
      "RV_Xf1vqPHRVOjLEo"
    )
    .then(
      (result) => {
        console.log(result.text);
        setDone(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
   

    return (
      <div className="contact-form" id="Contact">
        <div className="c-left">
          <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
            <span>Contact Me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#abf1ff94" }}
            ></div>
          </div>
        </div>

        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
            />
            <textarea name="message" className="user" placeholder="Message" />
            <input type="submit" value="Send" className="button" />
            <span>{done && "Thanks for contacting me!"}</span>
            <div className="blur c-blur1"></div>
          </form>
        </div>
      </div>
    );
}

export default Contact;