import React, { useState } from "react";
import stylesManga from "../assets/CSS/Manga.module.css";
import { NewArticle } from "./NewArticle";
import { handleNavegar } from "../components/Navegar";

export const MangaManhwas = ({ navegar }) => {
  const [articles, setArticles] = useState([]);

  const handleAddArticle = (tipo) => {
    const title = prompt("Ingrese el título:");
    if (!title) return alert("Título no puede estar vacío.");

    const imageUrl = prompt(
      "Ingrese la URL de la imagen: \n\nMax ancho: 300px, Max alto: 450px\nSi la imagen supera los límites, se redimensionará."
    );
    if (!imageUrl) return alert("URL de imagen no puede estar vacía.");

    setArticles((prev) => [...prev, { title, imageUrl, tipo }]);
  };

  return (
    <>
      <main>
        <div className={stylesManga.mainSeparador} />
        <section className={stylesManga.manga}>
          <h2>Mangas</h2>
          <article className={stylesManga.manga}>
            <picture>
              <img src="/Front-end/docs/Sprin3/Front-end/Sprin3/IMGs/homunculus.webp" alt="homunculus manga imagen" />
            </picture>
            <p>Homunculus</p>
            <p>
              <a href="#" onClick={handleNavegar("InfoManghwas", navegar)}>
                Ver información
              </a>
            </p>
          </article>
          <article className={stylesManga.manga}>
            <picture>
              <img
                src="/Front-end/docs/Sprin3/Front-end/Sprin3/IMGs/oyasumiPunpun.webp"
                alt="oyasumi punpun manga imagen"
              />
            </picture>
            <p>Oyasumi punpun</p>
            <p>
              <a href="#" onClick={handleNavegar("InfoManghwas", navegar)}>
                Ver información
              </a>
            </p>
          </article>
          <article className={stylesManga.manga}>
            <picture>
              <img
                src="/Front-end/docs/Sprin3/Front-end/Sprin3/IMGs/housekiNoKuni.webp"
                alt="houseki no kuni manga imagen"
              />
            </picture>
            <p>Houseki no kuni</p>
            <p>
              <a href="#" onClick={handleNavegar("InfoManghwas", navegar)}>
                Ver información
              </a>
            </p>
          </article>
          <article className={stylesManga.manga}>
            <picture>
              <img
                src="/Front-end/docs/Sprin3/Front-end/Sprin3/IMGs/chainsawman.webp"
                alt="chainsaw man manga imagen"
              />
            </picture>
            <p>Chainsaw man</p>
            <p>
              <a href="#" onClick={handleNavegar("InfoManghwas", navegar)}>
                Ver información
              </a>
            </p>
          </article>

          {articles
            .filter((article) => article.tipo === "manga")
            .map((article, i) => (
              <NewArticle
                key={i}
                title={article.title}
                imageUrl={article.imageUrl}
                tipo={article.tipo}
                navegar={navegar}
              />
            ))}

          <article
            onClick={() => handleAddArticle("manga")}
            className={`${stylesManga.manhwa} ${stylesManga.addArticle}`}
          >
            <picture>
              <div>+</div>
            </picture>
          </article>
        </section>
        <section className={stylesManga.manhwa}>
          <h2>Manhwas</h2>
          <article className={stylesManga.manhwa}>
            <picture>
              <img
                src="/Front-end/docs/Sprin3/Front-end/Sprin3/IMGs/soloLeveling.webp"
                alt="solo leveling manhwa imagen"
              />
            </picture>
            <p>Solo leveling</p>
            <p>
              <a href="#" onClick={handleNavegar("InfoManghwas", navegar)}>
                Ver información
              </a>
            </p>
          </article>
          <article className={stylesManga.manhwa}>
            <picture>
              <img
                src="/Front-end/docs/Sprin3/Front-end/Sprin3/IMGs/omniscientReader.webp"
                alt="omniscient reader viewpoint imagen"
              />
            </picture>
            <p>Lector omnisciente</p>
            <p>
              <a href="#" onClick={handleNavegar("InfoManghwas", navegar)}>
                Ver información
              </a>
            </p>
          </article>
          <article className={stylesManga.manhwa}>
            <picture>
              <img
                src="/Front-end/docs/Sprin3/Front-end/Sprin3/IMGs/beginningAfter.webp"
                alt="beginning after the end imagen"
              />
            </picture>
            <p>La vida despues de la muerte</p>
            <p>
              <a href="#" onClick={handleNavegar("InfoManghwas", navegar)}>
                Ver información
              </a>
            </p>
          </article>
          <article className={stylesManga.manhwa}>
            <picture>
              <img src="/Front-end/docs/Sprin3/Front-end/Sprin3/IMGs/lookism.webp" alt="lookism imagen" />
            </picture>
            <p>Lookism</p>
            <p>
              <a href="#" onClick={handleNavegar("InfoManghwas", navegar)}>
                Ver información
              </a>
            </p>
          </article>

          {articles
            .filter((article) => article.tipo === "manhwa")
            .map((article, i) => (
              <NewArticle
                key={i}
                title={article.title}
                imageUrl={article.imageUrl}
                tipo={article.tipo}
                navegar={navegar}
              />
            ))}

          <article
            onClick={() => handleAddArticle("manhwa")}
            className={`${stylesManga.manhwa} ${stylesManga.addArticle}`}
          >
            <picture>
              <div>+</div>
            </picture>
          </article>
        </section>
        <div className={stylesManga.mainSeparador} />
      </main>
    </>
  );
};
