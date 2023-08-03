import React from "react";
import "../Sass/Layout/Filters.scss";

function Filters({ tags }) {
  // Retourne le JSX représentant le contenu du composant Filters
  return (
    <div className="filters">
      {/* Conteneur pour afficher les filtres */}
      <div className="filters__container">
        {/* Utilisation de la fonction map pour afficher chaque élément du tableau "tags" */}
        {/* Chaque élément "tag" est rendu dans une balise <p> avec une clé unique "index" */}
        {tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
    </div>
  );
}
// Exportation du composant Filters
export default Filters;
