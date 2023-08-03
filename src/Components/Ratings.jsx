// Importation du module React depuis la bibliothèque "react"
import React from "react";

// Importation du fichier de styles Ratings.scss
import "../Sass/Layout/Ratings.scss";

// Définition du composant fonctionnel Ratings
function Ratings({ name, picture, rating = 0 }) {
  // Normalisation de la note pour s'assurer qu'elle est comprise entre 0 et 5
  const normalisedRating = Math.min(Math.max(rating, 0), 5);

  // Utilisation de l'unicode pour représenter une étoile remplie (★)
  const filledStar = "\u2605";

  // Création d'un tableau d'étoiles remplies et vides en fonction de la note normalisée
  const filledStars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < normalisedRating ? "filled" : "empty"}>
      {filledStar}
    </span>
  ));

  // Retourne le JSX représentant le contenu du composant Ratings
  return (
    <div className="ratings">
      {/* Conteneur pour afficher les étoiles de notation */}
      <div className="ratings__stars">{filledStars}</div>

      {/* Conteneur pour afficher les informations sur l'utilisateur */}
      <div className="ratings__user">
        {/* Conteneur pour afficher le nom de l'utilisateur */}
        <div className="rating__nom">
          {/* Affichage du nom de l'utilisateur fourni en utilisant la variable "name" */}
          <h3>{name}</h3>
        </div>

        {/* Affichage de la photo de l'utilisateur fournie en utilisant la variable "picture" */}
        <img src={picture} alt="" className="rating__photo" />
      </div>
    </div>
  );
}

// Exportation du composant Ratings pour qu'il puisse être utilisé ailleurs
export default Ratings;
