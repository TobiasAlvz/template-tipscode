import React from 'react';
import Input from './Input';

function Login({userRegister}) {
  return (
    <form className="form">
      <Input type="text" placeholder="Digite seu nome" />
      <Input type="password" placeholder="Senha" />
      {!userRegister &&
        <Input type="password" placeholder="Confirme sua senha" />}
      <button type="submit">{userRegister ? 'Login' : 'Register'}</button>
    </form>
  );
}

export default Login;
