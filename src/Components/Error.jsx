// Importation du module React depuis la bibliothèque "react"
import React from "react";

// Importation du fichier de styles Error.scss
import "../Sass/Layout/Error.scss";

// Importation du module Link depuis react-router-dom pour créer un lien de navigation
import { Link } from "react-router-dom";

// Composant fonctionnel Error
function Error() {
  // Retourne le JSX contenu du composant Error
  return (
    <div className="error">
      {/* Affichage du titre de l'erreur */}
      <div className="error__title">404</div>

      {/* Affichage du message d'erreur */}
      <div className="error__content">
        Oups! La page que vous demandez n'existe pas.
      </div>

      {/* Création d'un lien de navigation pour retourner à la page d'accueil */}
      <Link to="/">
        {/* Affichage du texte du lien */}
        <div className="error__link">Retourner sur la page d'accueil</div>
      </Link>
    </div>
  );
}

// Exportation du composant Error
export default Error;
