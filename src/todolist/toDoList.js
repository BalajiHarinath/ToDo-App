import Todo from "./todo";

const ToDoList = ({ filteredTodos, todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-item">
        {filteredTodos.map((todo) => (
          <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
