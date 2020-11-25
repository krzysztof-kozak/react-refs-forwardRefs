import React, { useRef } from "react";

import { Button } from "./components";
import "./styles.css";

export default function App() {
  const buttonRef = useRef();

  const handleMouseEnter = () => {
    const style = buttonRef.current.style;
    style.color = "red";
    style.backgroundColor = "white";
  };

  const handleMouseLeave = () => {
    const style = buttonRef.current.style;
    style.color = "initial";
    style.backgroundColor = "rgb(106, 106, 253)";
  };

  return (
    <div className="App">
      <Button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={buttonRef}
      />
    </div>
  );
}
