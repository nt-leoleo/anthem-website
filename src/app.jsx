import React from "react";
import Nav from "./components/Nav.jsx";
import Header from "./components/Header.jsx";
import Music from "./components/Music.jsx";
import Events from "./components/Events.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/_variables.scss";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Music />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
