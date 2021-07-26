import React from "react";
import NavBarDetail from "../../components/NavBarDetail";
import PokemonComponent from "../../components/Pokemon";
import {Container , Box } from "./styled";

const Pokemon = () => {
  return (
    <Container>
      <NavBarDetail />
      <Box>
        <PokemonComponent />
      </Box>
    </Container>
  );
}

export default Pokemon;
