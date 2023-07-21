import React from "react";
import "../Sass/Layout/Banner.scss";

const Banner = ({ image, title, size }) => {
  return (
    <div className="banner">
      <div className={`banner__background ${size}`}>
        <div className="banner__background-image">
          <img src={image} className={size} alt="Banner" />
        </div>
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
