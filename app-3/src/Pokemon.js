import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Pokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      setPokemon(res.data);
    });
  }, [name]);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
    </div>
  );
}

export default Pokemon;
