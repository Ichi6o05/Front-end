import React from "react";
import { handleNavegar } from "../components/Navegar";

export const HeaderContent = ({ navegar }) => {
  const closeMenuAndNavigate = (page) => (event) => {
    event.preventDefault();
    const menuToggle = document.getElementById("menuToggle");
    if (menuToggle) {
      menuToggle.checked = false;
    }
    handleNavegar(page, navegar)(event);
  };

  return (
    <>
      <header>
        <a href="#" onClick={closeMenuAndNavigate("MangaManhwas")}>
          <span className="homeIcon">⌂</span>
        </a>
        <h1>Mangas y Manhwas</h1>
        <input type="checkbox" id="menuToggle" />
        <label htmlFor="menuToggle" className="menuBtn">
          <a>
            <span className="menuIcon">☰</span>
            <div className="menuClose" />
          </a>
        </label>
        <nav className="navMenu">
          <ul>
            <li>
              <a href="https://zonatmo.com" target="_blank">Leer</a>
            </li>
            <li>
              <a href="https://damemimanga.cl" target="_blank">Comprar</a>
            </li>
          </ul>
          <a href="#" className="contacto" onClick={closeMenuAndNavigate("Contacto")}>
            Contact Us
          </a>
        </nav>
      </header>
    </>
  );
};
