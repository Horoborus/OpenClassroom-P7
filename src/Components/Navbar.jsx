// Navbar.js

import React, { useState } from "react";
import "../Sass/Layout/Navbar.scss";
import logo from "../Assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} className="logo" alt="Logo" />
      </div>

      <div
        className={`nav__links ${isMenuOpen ? "active" : ""} ${
          !isMenuOpen ? "inactive" : ""
        }`}
      >
        <NavLink to="/" exact>
          <div className={location.pathname === "/" ? "active" : ""}>
            Accueil
          </div>
        </NavLink>

        <NavLink to="/about">
          <div className={location.pathname === "/about" ? "active" : ""}>
            A Propos
          </div>
        </NavLink>
      </div>

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

export default Navbar;
