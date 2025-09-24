import React from "react";
import "../styles/Nav.scss";

function Nav() {
  return (
    <nav className="nav">
      <a href="#home">Inicio</a>
      <a href="#music">Música</a>
      <a href="#events">Eventos</a>
      <a href="#gallery">Galería</a>
      <a href="#contact">Contacto</a>
    </nav>
  );
}

export default Nav;
