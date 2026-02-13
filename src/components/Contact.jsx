import "../styles/Contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <p>Seguinos en nuestras redes</p>
      <h3>
        Instagram:{" "}
        <a href="https://www.instagram.com/anthem.metal" target="_blank">
          @anthem.metal
        </a>
      </h3>
      <p>¡contactate con nosotros!</p>
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
