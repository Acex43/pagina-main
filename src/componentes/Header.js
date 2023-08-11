import React from "react";
import '../styles/Header.css';


function Header({titulo}){
    return(
        <div className="contenedor-header">
            <div className="titulo-header">
            <h1>{titulo}</h1>
            </div>
        </div>

    );
}


export default Header;