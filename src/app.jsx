import Nav from "./components/Nav.jsx";
import Header from "./components/Header.jsx";
import Music from "./components/Music.jsx";
import Events from "./components/Events.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Fechas from "./pages/shows";
import "./styles/_variables.scss";

import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <Music />
      <Events />
      <Gallery />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fechas" element={<Fechas />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
