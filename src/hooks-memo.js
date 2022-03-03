import { useState, useMemo, memo, useRef } from "react";

export const HookMemo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef()

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: parseInt(price),
      },
    ]);
    setName('')
    setPrice('')

    nameRef.current.focus()
  };
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("tính toán lại...");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        style={{ margin: "20px 0px" }}
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li style={{ listStyle: "none", color: "red" }} key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
