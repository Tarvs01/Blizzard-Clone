import React from "react";

interface TabProperties {
  id: number;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  numOfSlides: number;
  goto: (id: number) => void;
}

function SliderTab({
  id,
  active,
  setActive,
  numOfSlides,
  goto,
}: TabProperties) {
  let actualActive = 0;
  if (active === 1) {
    actualActive = numOfSlides - 1;
  } else if (active == 2) {
    actualActive = numOfSlides;
  } else {
    actualActive = active - 2;
  }
  return (
    <div
      className="slider-tab"
      id={id === actualActive ? `active-tab` : ""}
      onClick={() => {
        goto(id);
      }}
    ></div>
  );
}

export default SliderTab;
