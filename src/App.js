import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#fff" }}>
        <Route path="/" exact component={Pokedex} />
        <Route path="/pokedex" exact component={Pokedex} />
        <Route path="/pokemon/:pokemonIndex" exact component={Pokemon} />
      </div>
    </BrowserRouter>
  );
}

export default App;
