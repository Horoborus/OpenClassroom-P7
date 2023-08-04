// Importation des modules nécessaires depuis React et le fichier de styles Collapse.scss
import React, { useState } from "react";
import "../Sass/Layout/Collapse.scss";

// Importation des images des flèches sur le dossier Assets
import ArrowUp from "../Assets/ChevronUp.png";
import ArrowDown from "../Assets/ChevronDown.png";

// Composant Collapse
const Collapse = ({ content, title, size }) => {
  const list = content;
  // Déclaration d'un état local "isOpen" pour gérer l'état du contenu pliable (ouvert ou fermé)
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour gérer le clic sur l'icône de la flèche pour ouvrir ou fermer le contenu pliable
  const toggleAccordion = () => {
    // Inversion de l'état "isOpen" en utilisant la fonction de rappel de useState
    setIsOpen((prevState) => !prevState);
  };

  // Retourne le JSX représentant le contenu du composant Collapse
  return (
    <div className="collapse__container">
      {/* Conteneur pour le titre et l'icône de la flèche */}
      <div className="collapse__bar">
        {/* Affichage du titre fourni en utilisant la variable "title" */}
        <h2 className="collapse__bar-title">{title}</h2>

        {/* Affichage de l'icône de la flèche (ArrowUp ou ArrowDown) en fonction de l'état "isOpen" */}
        <img
          src={isOpen ? ArrowUp : ArrowDown}
          className="collapse__arrow"
          onClick={toggleAccordion}
          alt=""
        />
      </div>

      {/* Condition pour afficher le contenu pliable uniquement si "isOpen" est vrai */}
      {isOpen && (
        <div className={`collapse__bar-content ${size}`}>
          {/* Vérifier si "list" est défini et qu'il s'agit d'un tableau */}
          {list && Array.isArray(list) ? (
            /* Affichage du contenu des équipements sous forme de liste à puces */
            <ul>
              {/* Itération sur chaque élément de la liste et affichage dans un <li> séparé */}
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            /* Affichage du contenu fourni en utilisant la variable "content" */
            <h3>{content}</h3>
          )}
        </div>
      )}
    </div>
  );
};

// Exportation du composant Collapse
export default Collapse;
