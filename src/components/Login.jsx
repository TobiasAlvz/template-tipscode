import React from 'react';
import Input from './Input';

function Login({ isLoggedIn }) {
  return (
    <form className="form">
      <Input type="text" placeholder="Digite seu nome" />
      <Input type="password" placeholder="Senha" />
      {!isLoggedIn && (
        <Input type="password" placeholder="Confirme sua senha" />
      )}
      <button type="submit">{isLoggedIn ? "Login" : "Register"}</button>
    </form>
  );
}

export default Login;