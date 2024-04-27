import React from 'react';
import Input from './Input';

function Form () {
  return (
    <div>
      <h1>Forms</h1>
      <form className="form">
        <Input type="text" placeholder="Digite seu nome" />
        <Input type="password" placeholder="Senha" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Form;
