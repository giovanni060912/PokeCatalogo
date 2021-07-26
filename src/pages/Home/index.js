import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <Link to="pokedex">
        <button className="button">
          <span>
            <p>POKEDEX</p>
          </span>
        </button>
      </Link>
    </div>
  );
}

export default Home;
