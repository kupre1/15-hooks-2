import React, { useState } from "react";
import "./App.css";

const App2 = () => {
  const [isOn, setIsOn] = useState(false);

  const togleLight = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className={`container ${isOn ? "Light-on" : "Light-off"} `}>
      <p>this light is {isOn ? "on" : "of"}</p>
      <button onClick={togleLight}>turn {isOn ? "Off" : "ON"}</button>
    </div>
  );
};

export default App2;
