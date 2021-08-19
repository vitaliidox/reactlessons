import "./App.css";
import Todo from "./components/Todo";
import { useState, useEffect } from "react";

function getTodoFromLocalStorage() {
  console.log("get from local storage");
  return localStorage.getItem("todo") || "";
}

function getTodos() {
  return Promise.resolve([
    { id: 1, text: "Learn react" },
    { id: 2, text: "Learn redux" },
  ]);
}

function App() {
  const [todo, setTodo] = useState(getTodoFromLocalStorage);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  useEffect(() => {
    console.log("todo changed");
    localStorage.setItem("todo", todo);
  }, [todo]);

  function handleClick(event) {
    event.preventDefault();

    setTodos([...todos, { id: todos.length + 1, text: todo }]);
    setTodo("");
  }

  function handleChangeTodo(event) {
    setTodo(event.target.value);
  }

  function handleDeleteTodo(todoToDelete) {
    const filteredTodos = todos.filter((todo) => todo.id !== todoToDelete.id);
    setTodos(filteredTodos);
  }

  return (
    <div>
      <form>
        <input onChange={handleChangeTodo} value={todo}></input>
        <button type="submit" onClick={handleClick}>
          Save todo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <>
            <Todo
              id={todo.id}
              text={todo.text}
              delete={() => handleDeleteTodo(todo)}
            />
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
