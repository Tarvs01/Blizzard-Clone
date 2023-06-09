import React, { useEffect, useState } from "react";
import { SlideData } from "../data/types";

interface SlideProperties {
  slide: SlideData;
  translate: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

function Slide({ slide, translate, setActive }: SlideProperties) {

  const [width, setWidth] = useState(window.innerWidth);
  const [translateDistance, setTranslateDistance] = useState(102);

  const checkWidth = () => {
    setWidth(window.innerWidth);
    if(width > 1200){
      setTranslateDistance(102);
    }
    else if(width > 600){
      setTranslateDistance(100.5);
    }
    console.log(translateDistance);
    
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  });

  useEffect(() => {
    if (translate === 0) {
      setActive(slide.id);
    }
  });

  return (
    <div
      className={`slide ${
        translate === 0 ? "active-carousel" : "inactive-carousel"
      } ${translate === -1 ? "left-inactive-carousel" : ""} ${
        translate === 1 ? "right-inactive-carousel" : ""
      }`}
      style={{
        backgroundImage: `url(pictures/${width > 1200 ? slide.bgImage : slide.smBgImage})`,
        backgroundPosition: `${width > 1200 ? "-250px" : ""}`,
        transform: `translateX(${translate * translateDistance}%)`,
        transition: `${
          [-1, 0, 1].includes(translate) ? "all ease 0.3s" : "none"
        }`,
      }}
    >
      {slide.hasOverlay && (
        <div
          className="slide-overlay"
          style={{ backgroundColor: `${slide?.overlayColor}` }}
        ></div>
      )}
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
          <button className="carousel-main-button main-button">
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
