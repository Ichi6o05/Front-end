document.addEventListener('DOMContentLoaded', () => {
    function createArticle(title, imageUrl, sectionClass) {
        const article = document.createElement('article');
        article.classList.add(sectionClass);

        const picture = document.createElement('picture');
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = title + ' image';
        img.style.width = '300px';
        img.style.height = '450px';
        picture.appendChild(img);

        const pTitle = document.createElement('p');
        pTitle.textContent = title;

        const pLink = document.createElement('p');
        const a = document.createElement('a');
        a.href = './HTML/infoManghwas.html';
        a.textContent = 'Ver información';
        pLink.appendChild(a);

        article.appendChild(picture);
        article.appendChild(pTitle);
        article.appendChild(pLink);

        return article;
    }

    const addArticleDivs = document.querySelectorAll('.addArticle div');
    addArticleDivs.forEach(div => {
        div.addEventListener('click', () => {
            const section = div.closest('section');
            const sectionClass = section.classList.contains('manga') ? 'manga' : 'manhwa';

            const title = prompt('Ingrese el título:');
            if (!title) {
                alert('Título no puede estar vacío.');
                return;
            }
            const imageUrl = prompt('Ingrese la URL de la imagen: \n\nMax ancho: 300px, Max alto: 450px\n'
                +'Si la imagen supera los limites, se redimensionará.');
            if (!imageUrl) {
                alert('URL de imagen no puede estar vacía.');
                return;
            }

            const newArticle = createArticle(title, imageUrl, sectionClass);

            const addArticleElement = div.closest('article');
            section.insertBefore(newArticle, addArticleElement);
        });
    });
});
