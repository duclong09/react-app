import { useState } from "react";

function TodoList() {
  //console.log(storageTodos)
  //to way-bindding
  const [todo, setTodo] = useState("");
  const [totos, setTodos] = useState(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(storageTodos);
    return storageTodos;
  });

  const handleSubmit = () => {
    setTodos((prev) => {
      const newTodo = [...prev, todo];

      const jsonTodo = JSON.stringify(newTodo);
      localStorage.setItem("todos", jsonTodo);
      return newTodo;
    });
    setTodo("");
  };

  const handleDelete = (index) => {
    setTodos((prev) => {
      prev.splice(index, 1);
      const newTodo = [...prev];
      console.log("todos", newTodo);
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    });
  };

  return (
    <div style={{ padding: 32 }}>
      <div>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={handleSubmit}>Add</button>
      </div>

      <div>
        <ul>
          {totos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
