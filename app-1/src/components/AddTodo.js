import React, { useState } from "react";

function AddTodo(props) {
  const { addTodo } = props;
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(input);
    setInput("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Add a task!"
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddTodo;
