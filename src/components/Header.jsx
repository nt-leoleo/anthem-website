import React from "react";
import "../styles/Header.scss";

function Header() {
  return (
    <header id="home" className="header">
      <img src="../../public/logo.png" alt="ANTHEM" className="logo" />
      <p>Deathcore desde San Luis, Argentina.</p>
    </header>
  );
}

export default Header;
