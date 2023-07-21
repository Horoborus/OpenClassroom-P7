import React, { useState } from "react";
import "../Sass/Layout/Slider.scss";

function Slider(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? props.images.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === props.images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel__container">
        <button className="carousel__btn-prev" onClick={goToPreviousSlide}>
          <p>&lt;</p>
        </button>
        <img
          className="carousel__image"
          src={props.images[currentSlide]} // Set the src attribute to the current slide's image URL
          alt={`Slide ${currentSlide + 1}`}
        />
        <button className="carousel__btn-next" onClick={goToNextSlide}>
          <p>&gt;</p>
        </button>
      </div>
    </div>
  );
}

export default Slider;
