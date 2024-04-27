import React from "react";
import "../style.css";

function App() {
  return (
    <div className="container">
    <h1>Forms</h1>
      <form className="form">
        <input type="text" placeholder="Digite seu nome"></input>
        <input type="password" placeholder="Senha"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
