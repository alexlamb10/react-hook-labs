import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./PokemonList";
import Pokemon from "./Pokemon";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:name" element={<Pokemon />} />
    </Routes>
  </Router>
);
