import React from "react";
import "../styles/Footer.css";
import Social from "../componentes/Social.js";

function Footer(props) {
  return (
    <div className="contenedor-footer">
      <p className="titulo-social">Social</p>
      <div className="espacio-social">
      <Social link="instagram" />

      <Social link="github" />

      <Social link="linkedin" />
    </div>
    <h6 className="copyright-social">Copyright by @Juanma Vizcaíno</h6>
    </div>
  );
}

export default Footer;
