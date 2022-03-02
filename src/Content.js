import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";

const tabs = ["todos", "comments", "albums","photos","users"]

export const Content = () => {
   //cua so trinh duyet:
   const [width, setWidth] = useState(window.innerWidth)



  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [type,setType] = useState('todos')
  const [showGoToTop, setShowGoToTop] = useState(false)
  //console.log(type)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
      });
  }, [type]);


  //Dom event listener
  useEffect(()=> {
    const handleScroll = () => {
        if(window.scrollY >=200){
            setShowGoToTop(true)
            // console.log('set state')
        }else{
            setShowGoToTop(false)
        }
    }
    window.addEventListener('scroll', handleScroll)
    console.log('addEventListener')
    //clean function

    return ()=>{
        window.removeEventListener('scroll', handleScroll)
        console.log('removeEventListener')
    }
  },[])


  useEffect(() => {
      const handleRisize = ()=>{
        setWidth(window.innerWidth)
      }
    window.addEventListener('resize', handleRisize)

    //cleanup func
    return ()=>{
        window.removeEventListener('resize', handleRisize)
    }
  },[])



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
      {showGoToTop && (
          <button style={{
              position: 'fixed',
              right: 20,
              bottom: 20,
          }}>
              Go to Top
          </button>
      )}

      <div>
          <h1>{width}</h1>
      </div>
    </div>


    
  );
};
