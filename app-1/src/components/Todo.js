import React from "react";

function Todo(props) {
  const { task } = props;

  return (
    <div>
      <h1>{task}</h1>
    </div>
  );
}

export default Todo;
