import { useStore, actions } from "./store"

export const GlobaState = ()=>{
    const [state, dispatch] = useStore()
    const {todos, todoInput} = state
    

    const handleAdd = ()=>{
        dispatch(actions.addTodo(todoInput))
    }
    return(
        <div>
            <input 
                value={state.todoInput}
                placeholder ="Enter todo ..."
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            {todos.map((todo,index)=> (
                <li key={index}>{todo}</li>
            ))}
        </div>
    )
}