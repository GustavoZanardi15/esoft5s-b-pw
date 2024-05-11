document.addEventListener("DOMContentLoaded", () => {
    getUrlSearchParams();
});

function getUrlSearchParams() {
    if (!location.search) {
        return;
    }

    const urlSearchParams = new URLSearchParams(location.search);
    const pokemonName = urlSearchParams.get("evolucao");
    changeTitle(pokemonName);
    getPokemonData(pokemonName);
}

async function getPokemonData(pokemonName) {
    try {
        const fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const jsonData = await fetchData.json();
        const sprites = jsonData.sprites;

        generateInfoSection(sprites, pokemonName);
    } catch (error) {
        console.error(error);
    }
}

function changeTitle(pokemonName) {
    document.title = `Página do ${pokemonName}`;
}

function generateInfoSection(sprites, pokemonName) {
    const section = document.querySelector('#info-pokemon');

    let h2 = section.querySelector('h2');

    if (!h2) {
        h2 = document.createElement('h2');
        h2.id = "info-pokemon-label";
        section.appendChild(h2);
    }

    h2.textContent = `Informações sobre ${pokemonName}`;

    const spritesArray = Object.values(sprites).filter(item => item !== null && typeof item === 'string');
    const imageLinks = spritesArray.filter(item => typeof item === 'string');

    const img = document.createElement('img');

    let currentIndex = 0;
    img.src = imageLinks[currentIndex];
    img.alt = `Imagem do pokemon ${pokemonName}`;
    img.width = "150";
    img.height = "150";

    img.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % imageLinks.length;
        img.src = imageLinks[currentIndex];
    });

    section.innerHTML = '';
    section.appendChild(h2);
    section.appendChild(img);
}