import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Binding from './Binding';
import Gift from './Gift';
import { OutPutClean } from './Output-Clean';
import TodoList from './todo-list';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Gift/>
    <Binding/>
    <TodoList/> */}
    <OutPutClean/>
  </React.StrictMode>,
  document.getElementById('root')
);

