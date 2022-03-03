import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Binding from "./Binding";
import { FakeChatApp } from "./Chat";
import Gift from "./Gift";
import { HookMemo } from "./hooks-memo";
import { UseCallBack } from "./main-callback-hooks";
import { OutPutClean } from "./Output-Clean";
import TodoList from "./todo-list";
import { Toggle } from "./Toggle";
import { UseRef } from "./useref";

//fake comments
const emitComment = (id) => {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung comment của lesson ${id}`,
      })
    );
  }, 1000);
};
emitComment(1);
emitComment(2);
emitComment(3);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Gift/>
    <Binding/>
    <TodoList/> */}
    {/* <OutPutClean/> */}
    {/* <FakeChatApp/> */}
    {/* <Toggle/> */}
    {/* <UseRef/> */}
    {/* <UseCallBack/> */}
    <HookMemo/>
  </React.StrictMode>,
  document.getElementById("root")
);
