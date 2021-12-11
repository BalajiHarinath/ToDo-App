const Todo = ({ todo, todos, setTodos }) => {
  function completeHandler() {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  }
  function deleteHandler(e) {
    console.log(todo.id);
    setTodos(todos.filter((item) => item.id !== todo.id));
  }
  return (
    <div className="todo">
      <li className={`todo-list ${todo.completed ? "completed" : ""}`}>
        {todo.inputText}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check" />
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash" />
      </button>
    </div>
  );
};
export default Todo;
