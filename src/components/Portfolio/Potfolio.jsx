import React from "react";
import "./Portfolio.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import Site1 from '../../img/site1.png';
import Site2 from '../../img/site2.png';
import Site3 from '../../img/site3.png';
import Site4 from '../../img/site4.png';
import 'swiper/css';

import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio =() => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
      <div className="portfolio" id="Portfolio">
        {/* heading */}
        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <img src={Site1} alt=""></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Site2} alt=""></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Site3} alt=""></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Site4} alt=""></img>
          </SwiperSlide>
        </Swiper>
      </div>
    );
}

export default Portfolio;