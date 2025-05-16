import React from "react";
import { handleNavegar } from "../components/Navegar";

export const HeaderContent = ({ navegar }) => {
  return (
    <>
      <header>
        <a href="#" onClick={handleNavegar("MangaManhwas", navegar)}>
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
              <a href="https://zonatmo.com">Leer</a>
            </li>
            <li>
              <a href="https://damemimanga.cl">Comprar</a>
            </li>
          </ul>
          <a href="#" className="contacto" onClick={handleNavegar("Contacto", navegar)}>
            Contact Us
          </a>
        </nav>
      </header>
    </>
  );
};
