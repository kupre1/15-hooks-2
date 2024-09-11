import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log(count);

  const handleIncrement = () => {
    setCount((prevElement) => prevElement + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>damachire</button>
    </>
  );
}

export default App;
