import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleMultiplyByTen = () => {
    setCount(count * 10);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} style={{ marginLeft: "10px" }}>
          Decrement
        </button>
        <button onClick={handleMultiplyByTen} style={{ marginLeft: "10px" }}>
          Multiply by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;