import React from "react";
import "../styles/Contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <p>Seguí nuestras redes o escribinos:</p>
      <p>
        Instagram:{" "}
        <a href="https://www.instagram.com/anthem.metal" target="_blank">
          @anthem.metal
        </a>
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensaje" rows="5" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
