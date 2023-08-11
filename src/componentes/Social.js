import React from "react";
import "../styles/Social.css";

function Social({link}) {
  return (
    <div className="contenedor-social">
      <div className="boton-social">
        <a href={link}>
          <img src={require(`../imagenes/iconos/${link}.svg`)} alt="icono-social" />
        </a>
      </div>
    </div>
  );
}

export default Social;
