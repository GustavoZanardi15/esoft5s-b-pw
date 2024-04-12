function changePageTitle(title) {
  document.title = title;
}

function generateInfoSection(sprites, pokemonName) {
  const h2 = document.createElement('h2');
  h2.id = "info-pokemon-label";
  h2.textContent = `Informações sobre ${pokemonName}`;

  const img = document.querySelector('img');
  
  // Transformar o objeto sprites em um array de links de imagens
  const spritesArray = Object.values(sprites).filter(item => item !== null && typeof item === 'string');
  const imageLinks = spritesArray.filter(item => typeof item === 'string');

  // Exibir a primeira imagem por padrão
  let currentIndex = 0;
  img.src = imageLinks[0];

  // Adicionar eventListener de clique na imagem
  img.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % imageLinks.length;
      img.src = imageLinks[currentIndex];
  });

  img.alt = `Imagem do pokemon ${pokemonName}`;

  const section = document.querySelector('#info-pokemon');

  section.appendChild(h2);
  section.appendChild(img);
}

async function getPokemonData(name) {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const jsonData = await data.json();
    generateInfoSection(jsonData.sprites, name); // Passar o objeto sprites completo
  } catch (error) {
    console.error(error);
  }
}

function getSearchParams() {
  if (!location.search) {
    return;
  }

  const urlSearchParams = new URLSearchParams(location.search);
  const pokemonName = urlSearchParams.get('name');

  changePageTitle(`Página do ${pokemonName}`);
  getPokemonData(pokemonName);
}

document.addEventListener('DOMContentLoaded', function () {
  getSearchParams();
});
