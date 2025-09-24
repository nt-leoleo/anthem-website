import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import "./styles/_variables.scss"; // Si querés importar estilos globales

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
