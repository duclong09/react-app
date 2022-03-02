import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";

const tabs = ["todos", "comments", "albums","photos","users"]

export const Content = () => {
   
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [type,setType] = useState('todos')
  console.log(type)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
      });
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => (
        <button 
            key={tab}
            style={type === tab ? {
                color: '#fff',
                backgroundColor: '#333'
            }: {}}
            onClick={() => setType(tab)}
        >
        {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title || todo.name}</li>
        ))}
      </ul>
    </div>
  );
};
