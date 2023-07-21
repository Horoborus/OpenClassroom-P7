import React from "react";
import "../Sass/Layout/Filters.scss";

function Filters({ tags }) {
  return (
    <div className="filters">
      <div className="filters__container">
        {tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
    </div>
  );
}

export default Filters;
