import React from "react";

function InfoSquirtle(props: any) {
    return (
      React.createElement(
        'section',
        { className: 'info-squirtle' },
        <h2 id="info-squirtle-label">Informações sobre Squirtle</h2>,
        <div>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
            alt="Squirtle 1"
          />
          <img
            src="https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png"
            alt="Squirtle 2"
          />
        </div>,
        <p>
          Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de
          Kanto e evolui para Wartortle.
        </p>
      )
    );
  }

export default InfoSquirtle