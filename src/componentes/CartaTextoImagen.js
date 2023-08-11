import React from "react";
import '../styles/CartaTextoImagen.css';


function CartaTextoImagen({text, link1, link2, link3, link4, link5, link6, link7, link8, link9}){
    return(
        <div className="contenedor-icono-texto">
            <h4 className="h4-carta-texto">{text}</h4>
            <div className="componente-imagen">
            <img src={require(`../imagenes/iconos/${link1}.svg`)} alt="icono" />
            <img src={require(`../imagenes/iconos/${link2}.svg`)} alt="icono" />
            <img src={require(`../imagenes/iconos/${link3}.svg`)} alt="icono" />
            <img src={require(`../imagenes/iconos/${link4}.svg`)} alt="icono" />
            <img src={require(`../imagenes/iconos/${link5}.svg`)} alt="icono" />
            <img src={require(`../imagenes/iconos/${link6}.svg`)} alt="icono" />
            <img src={require(`../imagenes/iconos/${link7}.svg`)} alt="icono" />
            <img src={require(`../imagenes/iconos/${link8}.svg`)} alt="icono" />
            <img src={require(`../imagenes/iconos/${link9}.svg`)} alt="icono" />
            </div>
        </div>
    );
}


export default CartaTextoImagen;