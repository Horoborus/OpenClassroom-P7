// Importation du module React 
import React from "react";

// Importation Card.scss
import "../Sass/Layout/Card.scss";

// Composant Card
function Card({ title, ImageUrl }) {
  // Retourne le JSX représentant le contenu du composant Card
  return (
    <div className="card__container">
      {/* Affichage de l'image en utilisant l'URL fournie dans la variable "ImageUrl" */}
      <img src={ImageUrl} className="card__image" alt="" />

      {/* Affichage du titre fourni en utilisant la variable "title" */}
      <h2>{title}</h2>
    </div>
  );
}

// Exportation du composant Card 
export default Card;
