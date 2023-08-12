import "./App.css";
import Nav from "./componentes/Nav.js";
import Header from "./componentes/Header.js";
import Footer from "./componentes/Footer.js";
import CartaTextoImagen from "./componentes/CartaTextoImagen.js";
import Opiniones from "./componentes/Opiniones.js";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        
        {/*Nav Menu*/}
        <Nav
          menu={"bx-menu.svg"}
          linkUno="http://localhost:3000/"
          linkDos="http://localhost:3000/"
          linkTres="http://localhost:3000/"
        />

        {/* Header */}
        <Header titulo="Juanma Vizcaíno" />

        {/* Section Skills */}
        <div className="habilidades">
          <h2 className="h2-habilidades">Sobre mí</h2>
          <div className="contenedor-carta-texto">
            <CartaTextoImagen
              link1="html"
              link2="css"
              link3="bootstrap"
              link4="tailwind"
              link5="javascript"
              link6="react"
              link7="git"
              link8="github"
              link9="netlify"
              text="El programador front end es el profesional que se encarga, principalmente, de diseñar, crear y trabajar con la interfaz visual de la página web, trabajando con el código que programa la parte 'gráfica' y visual que observa el usuario de primera mano, este programador debe ser capaz de utilizar Java, programar en HTML, trabajar con CMS, poseer conocimientos en el área de diseño, trabajar con distintas estructuras, entender las necesidades del área y la visión del gestor, etc.Entre las cualidades que hacen un buen programador frontend tenemos a la creatividad, habilidades en diseño visual, ser capaz de trabajar en equipo, seguir instrucciones y solucionar problemas con eficacia y rapidez."
            />
          </div>
        </div>

        {/* Opinion */}
        <div className="opiniones">
        <span className="emoticono1-opiniones"></span>
          <span className="emoticono2-opiniones"></span>
          <h3 className="h3-opiniones">Opiniones</h3>
          <Opiniones 
            imagen={"usuario.png"} 
            nombre={"Luis131"} 
            texto={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T."}/>

          <Opiniones 
            imagen={"usuario.png"} 
            nombre={"sofia1996"}
            texto={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T."} />

          <Opiniones 
            imagen={"usuario.png"} 
            nombre={"ElMatemático"} 
            texto={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T."}/>

          <Opiniones 
            imagen={"usuario.png"} 
            nombre={"Felipee_32"} 
            texto={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T."}/>
        </div>

        {/*Footer*/}
        <div className="footer">
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
