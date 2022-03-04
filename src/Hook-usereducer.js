import { useState, useReducer } from "react";

// useState
// 1. init state: 0 => giá trị khởi tạo
// 2. Action: hành động =>up(count + 1) / down(state - 1)

// useReducer
// 1. init state: 0 => giá trị khởi tạo
// 2. Action: hành động =>up(count + 1) / down(state - 1)
// 3.Reducer
// 4.Dispatch

//useState
const innitState = 0;

//Action
const UP_ACTION = "up";
const DOWN_ACTION = "down";

//reducer
const reducer = (state, action) => {
console.log('reducer running...')
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer,innitState);
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={()=> dispatch(UP_ACTION)}>Up</button>
    </div>
  );
};

