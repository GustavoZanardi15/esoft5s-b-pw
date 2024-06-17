import React from "react";

function Evolucao(props: any) {
    return (
      React.createElement(
        'section',
        { className: 'evolucao' },
        <h2 id="evolucao-label">Evoluções</h2>,
        <ul>
          <li>
            <a href="./pages/pokemon/index.html?name=squirtle">
              <figure>
                <img
                  src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"
                  alt="Squirtle"
                />
                <figcaption>1. Squirtle</figcaption>
              </figure>
            </a>
          </li>

          <li>
            <a href="./pages/pokemon/index.html?name=wartortle">
              <figure>
                <img
                  src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"
                  alt="Wartortle"
                />
                <figcaption>2. Wartortle</figcaption>
              </figure>
            </a>
          </li>

          <li>
            <a href="./pages/pokemon/index.html?name=blastoise">
              <figure>
                <img
                  src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"
                  alt="Blastoise"
                />
                <figcaption>3. Blastoise</figcaption>
              </figure>
            </a>
          </li>
        </ul>
      )
    );
  }

export default Evolucao