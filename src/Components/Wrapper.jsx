import React from "react";
import "../Sass/Layout/Wrapper.scss";

// composant qui gère le wrappe le contenu enfant
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

export default Wrapper;
