import React from "react";
import "../Sass/Layout/Ratings.scss";

function Ratings({ name, picture, rating = 0 }) {
  const normalisedRating = Math.min(Math.max(rating, 0), 5);
  const filledStar = "\u2605";

  const filledStars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < normalisedRating ? "filled" : "empty"}>
      {filledStar}
    </span>
  ));

  return (
    <div className="ratings">
      <div className="ratings__stars">{filledStars}</div>
      <div className="ratings__user">
        <div className="rating__nom">
          <h3>{name}</h3>
        </div>
        <img src={picture} alt="" className="rating__photo" />
      </div>
    </div>
  );
}

export default Ratings;
