import "../styles/Gallery.scss";

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Galería</h2>
      <div className="images">
        <img src="https://i.imgur.com/imagen1.jpg" alt="Foto de Anthem" />
        <img src="https://i.imgur.com/imagen2.jpg" alt="Foto de Anthem" />
        <img src="https://i.imgur.com/imagen3.jpg" alt="Foto de Anthem" />
      </div>
    </section>
  );
}

export default Gallery;
