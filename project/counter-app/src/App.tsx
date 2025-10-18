import React from "react";
import Counter from "./component/Counter";
import ShoppingCart from "./component/ShoppingCart";
import "./App.css";

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center", margin: "40px" }}>
      <h1>React Hooks Practice</h1>
      <hr />
      <h2>1️⃣ Counter (useState Example)</h2>
      <Counter />

      <hr style={{ margin: "40px 0" }} />
      <h2>2️⃣ Shopping Cart (useReducer Example)</h2>
      <ShoppingCart />
    </div>
  );
};

export default App;
