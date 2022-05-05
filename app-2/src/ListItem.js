import React from "react";

function ListItem(props) {
  const { index, poke } = props;
  return (
    <div>
      <h3 key={index}>{poke.text}</h3>
    </div>
  );
}

export default ListItem;
