import React from "react";
import "../styles/Music.scss";

function Music() {
  return (
    <section id="music" className="music">
      <h2>Música</h2>
      <p>Escuchá nuestras canciones:</p>
      <iframe
        src="https://open.spotify.com/embed/album/tuAlbum"
        allow="encrypted-media"
      ></iframe>
    </section>
  );
}

export default Music;
