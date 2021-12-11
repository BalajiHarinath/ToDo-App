import "./styles.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoList from "./todolist/toDoList";
//import Todolist from "./components/Todolist";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("All");
  useEffect(() => {
    switch (status) {
      case "all":
        setFilteredTodos(todos);
        break;
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  }, [todos, status]);
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <ToDoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}
