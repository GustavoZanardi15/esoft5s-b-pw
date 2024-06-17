import React from "react";

function Curiosidades(props: any) {
    return (
      React.createElement(
        'section',
        { className: 'curiosidades' },
        <h2 id="curiosidades-label">Curiosidades</h2>,
        <ul>
          <li>Squirtle é um dos Pokémon mais populares e adoráveis.</li>
          <li>
            Seu nome deriva das palavras "squirrel" (esquilo) e "turtle"
            (tartaruga).
          </li>
          <li>
            Squirtle é frequentemente escolhido por treinadores para começar sua
            jornada Pokémon.
          </li>
        </ul>
      )
    );
  }

export default Curiosidades

