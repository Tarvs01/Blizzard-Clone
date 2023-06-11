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
    ></div>
  );
}

export default Slide;
