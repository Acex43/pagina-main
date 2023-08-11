import React from "react";
import '../styles/Nav.css';
import SwitchColor from "./SwitchColor.js";


function Nav({menu}){
    return(
        <div className="contenedor-nav">
            <nav>
            <div className="logo-nav">
                <p>JMV</p>
            </div>
            <label for="menu" className="nav-label">
          <img src={require(`../imagenes/${menu}`)} alt="menu" />
        </label>
        <input type="checkbox" id="menu" className="nav-input" />
                <ul className="nav-menu">
                    <SwitchColor 
                        color="black" />
                    <li className="nav-item"><a className="nav-link" href="{linkUno}">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link" href="{linkDos}">Sobre</a></li>
                    <li className="nav-item"><a className="nav-link" href="{linkTres}">Contacto</a></li>
                    {/*<div className="elemento-switch">
                        <SwitchColor />
                    </div>*/}
                </ul>
            </nav>
        </div>
    );
}








export default Nav;