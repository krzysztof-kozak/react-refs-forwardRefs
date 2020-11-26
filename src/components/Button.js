import React, { useEffect, useRef, forwardRef } from "react";

const Button = forwardRef(({ onMouseEnter, onMouseLeave }, buttonRef3) => {
  const buttonRef1 = useRef();
  const buttonRef2 = useRef();

  useEffect(() => {
    const style = buttonRef1.current.style;
    style.color = "red";
    style.backgroundColor = "white";
  }, []);

  const style = buttonRef2.current.style;
  const handleMouseEnter = () => {
    style.color = "red";
    style.backgroundColor = "white";
  };
  const handleMouseLeave = () => {
    style.color = "initial";
    style.backgroundColor = "rgb(106, 106, 253)";
  };

  return (
    <>
      <button ref={buttonRef1}>Button</button>

      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={buttonRef2}
      >
        Button2
      </button>

      <button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={buttonRef3}
      >
        Button3
      </button>
    </>
  );
});

export default Button;
