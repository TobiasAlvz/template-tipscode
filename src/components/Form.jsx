import React from "react";


function Form() {
    return (
      <div>
        <h1>Forms</h1>
        <form className="form">
          <input type="text" placeholder="Digite seu nome" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
export default Form