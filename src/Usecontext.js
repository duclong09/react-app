import { Context } from "./Context";
import { ThemeContext } from "./ThemeContext";
import "./App.css";
import { useContext } from "react";

//Context:

//1.Create Context

//2. Provider : nhà cung cấp
//3. Consumer : nhận dữ liệu
export const UseConTex = () => {
  const context = useContext(ThemeContext);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.toggleTheme}>Toggle Button</button>
      <Context />
    </div>
  );
};
