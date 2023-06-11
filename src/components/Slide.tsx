import React from "react";
import { SlideData } from "../data/types";

function Slide({ slide, translate }: { slide: SlideData; translate: number }) {
  return (
    <div
      className={`slide ${
        translate === 0 ? "active-carousel" : "inactive-carousel"
      } ${translate === -1 ? "left-inactive-carousel" : ""} ${
        translate === 1 ? "right-inactive-carousel" : ""
      }`}
      style={{
        backgroundImage: `url(pictures/${slide.bgImage})`,
        transform: `translateX(${translate * 102}%)`,
        transition: `${
          [-1, 0, 1].includes(translate) ? "all ease 0.3s" : "none"
        }`,
      }}
    >
      <div className="slide-content-cont" style={{ top: `${slide.top}%` }}>
        <img
          src={`../pictures/${slide.image}`}
          alt=""
          style={{ width: `${slide.imageWidth}px` }}
        />
        <h1 className="carousel-main-heading">{slide.mainHeading}</h1>
        {slide.subHeading && (
          <h2 className="carousel-sub-heading">{slide.subHeading}</h2>
        )}
        <div className="carousel-button-cont">
          <button className="carousel-main-button">
            {slide.mainButtonText}
          </button>
          {slide.secondaryButtonText && (
            <button className="carousel-secondary-button">
              {slide.secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Slide;
