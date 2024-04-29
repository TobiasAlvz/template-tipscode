import React from 'react';
import Input from './Input';

function Login({showConfirmPasswordInput}) {
  return (
    <form className="form">
      <Input type="text" placeholder="Digite seu nome" />
      <Input type="password" placeholder="Senha" />
      {!showConfirmPasswordInput &&
        <Input type="password" placeholder="Confirme sua senha" />}
      <button type="submit">Login</button>
    </form>
  );
}
