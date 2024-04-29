import React from 'react';
import Login from './Login';

function renderConditionally () {
  return isLoggeIn === true ? <h1>Bem-Vindo</h1> : <Form />;
}


function Form () {
  return (
    <div>
      <h1>Forms</h1>
      <Login />
    </div>
  );
}

export default Form;
