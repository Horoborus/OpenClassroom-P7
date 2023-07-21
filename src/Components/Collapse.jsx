import React, { useState } from "react";
import "../Sass/Layout/Collapse.scss";
import ArrowUp from "../Assets/ChevronUp.png";
import ArrowDown from "../Assets/ChevronDown.png";

const Collapse = ({ content, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="collapse__container">
      <div className="collapse__bar">
        <h2 className="collapse__bar-title">{title}</h2>
        <img
          src={isOpen ? ArrowUp : ArrowDown}
          className="collapse__arrow"
          onClick={toggleAccordion}
          alt=""
        />
      </div>
      {isOpen && (
        <div className="collapse__bar-content">
          <h3>{content}</h3>
        </div>
      )}
    </div>
  );
};

export default Collapse;
