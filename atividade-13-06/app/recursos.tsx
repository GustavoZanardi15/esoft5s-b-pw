import React from "react";

function Recursos(props: any) {
    return (
      React.createElement(
        'section',
        { className: 'recursos' },
        <h2 id="recursos-label">Recursos Adicionais</h2>,
        <ul>
          <li>
            <a
              href="https://www.pokemon.com/br/pokedex/squirtle"
              target="_blank"
              >Pokédex - Squirtle</a>
          </li>
          <li>
            <a
              href="https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)"
              target="_blank"
              >Bulbapedia - Squirtle</a>
          </li>
        </ul>
      )
    );
  }

export default Recursos


