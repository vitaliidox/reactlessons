import React from "react";

function TodoList(props) {
  const { key, text, delet } = props;

  return (
    <React.Fragment key={key}>
      <li>{text}</li>
      <button onClick={delet}>delete</button>
    </React.Fragment>
  );
}

export default TodoList;
