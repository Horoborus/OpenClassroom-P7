import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Sass/Layout/Ratings.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Ratings({ name, picture, rating = 0 }) {
  const normalisedRating = Math.min(Math.max(rating, 0), 5);

  const filledStars = Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      className={index < normalisedRating ? "filled" : "empty"}
    />
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
