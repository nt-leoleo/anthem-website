import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Music from "./components/Music";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
