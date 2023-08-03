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

  // Vérifier si le tableau d'images contient plus d'une image
  const multipleSlides = props.images.length > 1;

  return (
    <div className="carousel">
      <div className="carousel__container">
        {/* Condition ternaire pour afficher ou masquer le bouton "Précédent" */}
        {multipleSlides && (
          <button className="carousel__btn-prev" onClick={goToPreviousSlide}>
            <p>&lt;</p>
          </button>
        )}

        <img
          className="carousel__image"
          src={props.images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
        />

        {/* Condition ternaire pour afficher ou masquer le bouton "Suivant" */}
        {multipleSlides && (
          <button className="carousel__btn-next" onClick={goToNextSlide}>
            <p>&gt;</p>
          </button>
        )}
      </div>

      {/* Condition ternaire pour afficher ou masquer le compteur */}
      {multipleSlides && (
        <div className="carousel__info">
          <p>
            {currentSlide + 1} / {props.images.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Slider;
