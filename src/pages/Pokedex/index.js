import React from "react";
import {Container} from './styled'
import NavBar from "../../components/NavBar";
import PokemonList from "../../components/PokemonList";

const Pokedex = () => {
  return (
    <Container>
      <NavBar />
      <div>
        <PokemonList />
      </div>
    </Container>
  );
}

export default Pokedex;
