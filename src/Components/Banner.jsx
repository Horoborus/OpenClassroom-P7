// Importation de la bibliothèque React pour utiliser des composants React
import React from "react";

// Importation du fichier de style du composant
import "../Sass/Layout/Banner.scss";

const Banner = ({ image, title, size }) => {
  const jumpLine = title.replace(/,/g, ",\n");

  return (
    <div className="banner">
      <div className={`banner__background ${size}`}>
        <div className={`banner__background-image ${size}`}>
          <img src={image} className={size} alt="Banner" />
        </div>
      </div>
      <h1>{jumpLine}</h1>
    </div>
  );
};

export default Banner;
