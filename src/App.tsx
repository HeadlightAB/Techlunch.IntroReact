import React from "react";
import "./App.css";
import Header from "./Header";
import Counter from "./counter/counter";
import { CounterClass } from "./counter/counterclass";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <CounterClass />
    </div>
  );
}

export default App;
