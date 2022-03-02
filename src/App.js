import { useState } from "react";
import { Content } from "./Content";

const order = [100, 200, 300];

function App() {

  const [show,setShow] = useState(false)
  const [count, setCount] = useState(() => {
    const totalOder = order.reduce(
      (total, totalCurrent) => total + totalCurrent
    );
    return totalOder;
  });

  //tạo bộ đếm
  const handleCount = () => {
    //truyền dưới dạng number
    //setCount(count + 1)

    // truyền dạng callback
    setCount((prevCounter) => prevCounter + 1);
  };

  // - Initial state với callbacks?'
  //  Tạo thông tin info
  const [info, setInfo] = useState({
    name: "Duc Long",
    age: 22,
    address: "Thảo điền Quận 2",
  });

  //update lại thông tin info
  const handleUpdate = () => {
    setInfo({
      ...info,
      playGame: "Soccer",
      color: "green",
    });
  };

  return (
    <div className="App" style={{ margin: 50 }}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>To Update</button>

      <h2>{count}</h2>
      <button onClick={handleCount}>Increase</button>
      <div style={{padding: 50}}>
        <button onClick={()=> setShow(!show)}>Toggle</button>
        {show && <Content/>}
      </div>
     
    </div>
  );
}

export default App;
