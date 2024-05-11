let params = new URLSearchParams(location.search)
    document.title = "Página do " + params.get("evolucao")

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var evolutionName = getParameterByName('evolucao');

var pokemonNameElement = document.getElementById("pokemon-name");
pokemonNameElement.textContent = evolutionName;

if (evolutionName) {

    var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + evolutionName.toLowerCase();

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            var pokemonImageUrl = data.sprites.front_default;

            var pokemonImage = document.createElement("img");

            pokemonImage.src = pokemonImageUrl;

            pokemonImage.alt = evolutionName;
            pokemonImage.setAttribute('aria-label', evolutionName);

            var infoSquirtleSection = document.getElementById("info-squirtle");
            infoSquirtleSection.appendChild(pokemonImage);
        })
        .catch(error => console.error('Erro ao carregar a imagem do Pokémon:', error));
}