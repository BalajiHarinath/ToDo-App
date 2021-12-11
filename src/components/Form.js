const Form = ({ input, setInput, todos, setTodos, status, setStatus }) => {
  function inputHandler(e) {
    setInput(e.target.value);
  }

  function clickHandler(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { inputText: input, completed: false, id: Math.random() * 1000 }
    ]);
    setInput("");
    console.log(todos);
  }

  function statusHandler(e) {
    setStatus(e.target.value);
  }

  return (
    <form>
      <input
        value={input}
        onChange={inputHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={clickHandler} type="submit" className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onClick={statusHandler} className="select-category">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
