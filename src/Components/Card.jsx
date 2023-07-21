import React from "react";
import "../Sass/Layout/Card.scss";

function Card({ title, ImageUrl }) {
  return (
    <div className="card__container">
      <img src={ImageUrl} className="card__image" alt="" />
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
