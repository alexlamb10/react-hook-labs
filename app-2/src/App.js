import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ListItem from "./ListItem";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5"
      )
      .then((res) => setList(res.data));
  }, []);

  return (
    <div className="App App-header">
      <h1>Facts about Cats</h1>
      {list.map((poke, index) => {
        return <ListItem index={index} poke={poke} />;
      })}
    </div>
  );
}

export default App;
