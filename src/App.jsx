import React from "react";
import logo from "./assets/vite.svg";
import "./App.css";
import { Counter } from "./features/counter/Counter.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
