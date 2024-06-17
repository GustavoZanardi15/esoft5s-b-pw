import React from "react";
import './styles.css'
import Header from "./header";
import InfoSquirtle from "./infosquirtle";
import Caracteristicas from "./caracteristicas";
import Curiosidades from "./curiosidades";
import Recursos from "./recursos";
import Evolucao from "./evolucao";
import CardSection from "./cardsection";

export default function Home() {
  return (
    <div id="root">
      <Header title={"Squirtle"}/>
      
      <main>
        <CardSection 
          title={"Informações sobre o Squirtle"} 
          children={<InfoSquirtle></InfoSquirtle>}
        />
        <CardSection 
          title={"Caracteristicas"} 
          children={<Caracteristicas></Caracteristicas>}
        />
        <CardSection 
          title={"Curiosidades"} 
          children={<Curiosidades></Curiosidades>}
        />
        <CardSection 
          title={"Recursos"} 
          children={<Recursos></Recursos>}
        />
        <CardSection 
          title={"Evolucao"} 
          children={<Evolucao></Evolucao>}
        />
      </main>
      
    </div>
  );
}
