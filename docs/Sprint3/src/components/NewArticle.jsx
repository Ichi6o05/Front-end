import React from 'react'
import stylesManga from "../assets/CSS/Manga.module.css";
import { handleNavegar } from "../components/Navegar";

export const NewArticle = ({ title, imageUrl, tipo, navegar }) => {
  return (
    <>
    <article className={`${stylesManga[tipo]} ${stylesManga.addArticle}`}>
      <picture>
        <img src={imageUrl} alt={`${title} image`} style={{ width: '300px', height: '450px' }} />
      </picture>
      <p>{title}</p>
      <p>
        <a href="#" onClick={handleNavegar("InfoManghwas", navegar)}>
            Ver información
        </a>
      </p>
    </article>
    </>
  )
}
