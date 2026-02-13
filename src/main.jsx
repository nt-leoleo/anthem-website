import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import "./styles/_variables.scss";
import "../index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/anthem-website">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
