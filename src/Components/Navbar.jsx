// Importation des modules nécessaires depuis React et le fichier de styles Navbar.scss
import React, { useState } from "react";
import "../Sass/Layout/Navbar.scss";

// Importation de l'image du logo depuis le dossier Assets
import logo from "../Assets/logo.png";

// Importation des modules NavLink et useLocation depuis react-router-dom
import { NavLink, useLocation } from "react-router-dom";

// Définition du composant fonctionnel Navbar
function Navbar() {
  // Déclaration d'un état local pour gérer l'état du menu (ouvert ou fermé)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Récupération de l'objet "location" qui contient les informations sur l'URL actuelle
  const location = useLocation();

  // Fonction pour gérer le clic sur le bouton du menu
  const handleMenuClick = () => {
    // Inversion de l'état du menu (si ouvert, il sera fermé, et vice versa)
    setIsMenuOpen(!isMenuOpen);
  };

  // Retourne le JSX représentant le contenu du composant Navbar
  return (
    <div className="nav">
      <div className="nav__logo">
        {/* Affichage de l'image du logo */}
        <img src={logo} className="logo" alt="Logo" />
      </div>

      {/* Conteneur pour les liens de navigation */}
      <div
        className={`nav__links ${isMenuOpen ? "active" : ""} ${
          !isMenuOpen ? "inactive" : ""
        }`}
      >
        {/* Lien de navigation vers la page d'accueil */}
        <NavLink to="/">
          {/* Si l'URL actuelle correspond à la page d'accueil, ajouter la classe "active" */}
          <div className={location.pathname === "/" ? "active" : ""}>
            Accueil
          </div>
        </NavLink>

        {/* Lien de navigation vers la page "À Propos" */}
        <NavLink to="/about">
          {/* Si l'URL actuelle correspond à la page "À Propos", ajouter la classe "active" */}
          <div className={location.pathname === "/about" ? "active" : ""}>
            A Propos
          </div>
        </NavLink>
      </div>

      {/* Bouton du menu, cliquer dessus appelle la fonction handleMenuClick */}
      <div className="nav__btn" onClick={handleMenuClick}>
        <label>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
  );
}

// Exportation du composant Navbar
export default Navbar;
