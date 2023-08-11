import React from 'react';
import '../styles/Opiniones.css';

function Opiniones({imagen, nombre, texto}){
    return(
        <div className='contenedor-opiniones'>
            <div className='contenedor-imagen'>
            <img className='imagen-opinion' src={require(`../imagenes/${imagen}`)} alt='foto-opinion'/>
            <h4 className='h4-opinion'>{nombre}</h4>
            </div>
            
            <blockquote>{texto}</blockquote>
        </div>
    );
}


export default Opiniones;
