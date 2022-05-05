import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import List from "./components/List";

function App() {
  const [todo, setTodo] = useState([]);
  function addTodo(item) {
    let newTodo = [...todo, item];
    setTodo(newTodo);
  }

  return (
    <div className="App App-header">
      <AddTodo addTodo={addTodo} />
      <List todo={todo} />
    </div>
  );
}

export default App;
