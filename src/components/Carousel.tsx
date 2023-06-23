import React, { useState, useEffect, TouchEvent } from "react";
import Slide from "./Slide";
import { slidesData } from "../data/slidesData";
import SliderTab from "./SliderTab";

function Carousel() {
  let numberOfSlides = slidesData.length;

  const [translates, setTranslates] = useState([0]);
  const [activeSlideId, setActiveSlideId] = useState(1);
  const [touchPosition, setTouchPosition] = useState<number | null>(0);

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

  function goToSlide(id: number) {
    let actualActive = 0;
    if (activeSlideId === 1) {
      actualActive = numberOfSlides - 1;
    } else if (activeSlideId === 2) {
      actualActive = numberOfSlides;
    } else {
      actualActive = activeSlideId - 2;
    }

    let translateArray = [...translates];

    if (id < actualActive) {
      for (let i = 0; i < actualActive - id; i++) {
        let newArray = [];
        for (let i of translateArray) {
          if (i === numberOfSlides - 3) {
            newArray.push(-2);
          } else {
            newArray.push(i + 1);
          }
        }
        translateArray = [...newArray];
      }
    } else if (id > actualActive) {
      for (let i = 0; i < id - actualActive; i++) {
        let newArray = [];

        for (let i of translateArray) {
          if (i === -2) {
            newArray.push(numberOfSlides - 3);
          } else {
            newArray.push(i - 1);
          }
        }
        translateArray = [...newArray];
      }
    } else {
    }

    setTranslates(translateArray);
  }

  const handleTouchStart = (e: TouchEvent) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      shiftRight();
    }

    if (diff < -5) {
      shiftLeft();
    }

    setTouchPosition(null);
  };

  return (
    <div>
      <div className="hero-cont">
        <div
          className="slider-cont"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {slidesData.map((slide) => {
            return (
              <Slide
                key={slide.id}
                {...{
                  slide,
                  translate: translates[slide.id - 1],
                  setActive: setActiveSlideId,
                }}
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

          <div className="slider-tabs-cont">
            {slidesData.map((slide) => {
              return (
                <SliderTab
                  key={slide.id}
                  id={slide.id}
                  active={activeSlideId}
                  setActive={setActiveSlideId}
                  numOfSlides={numberOfSlides}
                  goto={goToSlide}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
