import React, { useState } from "react";
import "./Slider.css";
import services from "./data";
import Subtitle from "./Subtitle";
import Dots from "./Dots";
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = services.length;
  const setPrevious = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const setNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  // console.log(current);
  return (
    <div>
      <div className="slider-main">
        <button className="previous" onClick={setPrevious}>
          Prev
        </button>
        {services.map((service, index) => {
          return (
            <div
              className={
                current === index
                  ? "slider-container"
                  : "slider-container-disable "
              }
              key={service.id}
            >
              <h1>{service.title}</h1>
              <Subtitle
                subtitle={service.subTitle}
                className="cards-container"
              />
            </div>
          );
        })}
        <button className="next" onClick={setNext}>
          Next
        </button>
      </div>
      <div className="dot">
        {services.map((service, index) => {
          return <span className={current === index
            ? "indvidual-dots-active"
            : "indvidual-dots "} key = {index}></span>;
        })}
      </div>
    </div>
  );
};

export default Slider;
