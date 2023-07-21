import React from "react";
import "../Sass/Layout/Error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <div className="error__title">404</div>
      <div className="error__content">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link to="/">
        <div className="error__link">Retourner sur la page d’accueil</div>
      </Link>
    </div>
  );
}

export default Error;
