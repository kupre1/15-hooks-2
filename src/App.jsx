import { useState } from "react";
import "./App.css";
import MyComponent from "./assets/Component/MyComponent";

function App() {
  const [state, setState] = useState(false);

  const onClickHandler = () => {
    setState((prev) => !prev);
  };
  return (
    <>
      <h1>hello world</h1>
      {state && <MyComponent />}
      <button onClick={onClickHandler}>click me</button>
    </>
  );
}

export default App;
