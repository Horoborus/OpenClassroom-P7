// Importation du module React depuis la bibliothèque "react"
import React from "react";

// Importation du fichier de styles Footer.scss
import "../Sass/Layout/Footer.scss";

// Importation de l'image du logo (LOGO(1).png) depuis le dossier Assets
import "../Assets/LOGO(1).png";

// Importation de l'image des droits d'auteur (Kasa-rights-reserved.png) depuis le dossier Assets
import "../Assets/Kasa-rights-reserved.png";

// Définition du composant fonctionnel Footer
function Footer() {
  // Retourne le JSX représentant le contenu du composant Footer
  return (
    <div className="footer">
      {/* Conteneur pour afficher le logo */}
      <div className="footer__logo">
        {/* Affichage de l'image du logo */}
        <img src={require("../Assets/LOGO(1).png")} alt="" />
      </div>

      {/* Conteneur pour afficher les droits d'auteur */}
      <div className="footer__rights">
        {/* Affichage de l'image des droits d'auteur */}
        <h3 className="footer__rights-description">
          &copy; 2020 Kasa. All rights reserved
        </h3>
      </div>
    </div>
  );
}

// Exportation du composant Footer pour qu'il puisse être utilisé ailleurs
export default Footer;
