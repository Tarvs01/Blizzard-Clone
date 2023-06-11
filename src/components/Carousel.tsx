import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import { slidesData } from "../data/slidesData";

function Carousel() {
  let numberOfSlides = slidesData.length;
  const [translates, setTranslates] = useState([0]);

  useEffect(() => {
    let initial = -2;
    let initialArray = [];
    for (let i = 0; i < numberOfSlides; i++) {
      initialArray.push(i + initial);
    }
    setTranslates(initialArray);
  }, []);

  function shiftRight() {
    let newArray = [];

    for (let i of translates) {
      if (i === -2) {
        newArray.push(numberOfSlides - 3);
      } else {
        newArray.push(i - 1);
      }
    }
    setTranslates(newArray);
  }

  function shiftLeft() {
    let newArray = [];

    for (let i of translates) {
      if (i === numberOfSlides - 3) {
        newArray.push(-2);
      } else {
        newArray.push(i + 1);
      }
    }
    setTranslates(newArray);
  }

  return (
    <div>
      <div className="hero-cont">
        <div className="slider-cont">
          {slidesData.map((slide) => {
            return (
              <Slide
                key={slide.id}
                {...{ slide, translate: translates[slide.id - 1] }}
              />
            );
          })}
          <div className="left-carousel-button" onClick={shiftLeft}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              role="presentation"
              fill="none"
              strokeWidth="2.5px"
              viewBox="0 0 24 24"
            >
              <path d="M15 18L9 12L15 6"></path>
            </svg>
          </div>

          <div className="right-carousel-button" onClick={shiftRight}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              role="presentation"
              fill="none"
              strokeWidth="2.5px"
              viewBox="0 0 24 24"
            >
              <path d="M9 18L15 12L9 6"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
