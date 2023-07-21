import React from "react";
import "../Sass/Layout/Footer.scss";
import "../Assets/LOGO(1).png";
import "../Assets/Kasa-rights-reserved.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={require("../Assets/LOGO(1).png")} alt="" />
      </div>
      <div className="footer__rights"></div>
      <img src={require("../Assets/Kasa-rights-reserved.png")} alt="" />
    </div>
  );
}

export default Footer;
