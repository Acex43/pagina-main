import React from "react";
import '../styles/SwitchColor.css';

function SwitchColor({color}){
    return(
        <div className="contenedor-switch">
            <label className="switch">
                <img src={require(`../imagenes/icon-${color}.svg`)} alt="icono-color"/>
            <input type="checkbox"/>
            </label>
        </div>
    );
}

export default SwitchColor;