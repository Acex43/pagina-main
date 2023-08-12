import React from "react";
import '../styles/Header.css';


function Header({titulo}){
    return(
        <div className="contenedor-header">
            <div className="titulo-header">
            <h1 className="h1-header">{titulo}</h1>
            </div>
        </div>

    );
}


export default Header;