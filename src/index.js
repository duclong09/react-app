import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Binding from './Binding';
import { FakeChatApp } from './Chat';
import Gift from './Gift';
import { OutPutClean } from './Output-Clean';
import TodoList from './todo-list';




//fake comments
const emitComment = (id)=>{
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`,{
        detail: `Nội dung comment của lesson ${id}`
      })
    )
  }, 1000);
}
emitComment(1)
emitComment(2)
emitComment(3)

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Gift/>
    <Binding/>
    <TodoList/> */}
    {/* <OutPutClean/> */}
    <FakeChatApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

