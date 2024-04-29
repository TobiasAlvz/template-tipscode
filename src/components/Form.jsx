import React from 'react';
import Login from './Login';

function Form({userRegister}) {
  return (
    <div>
      <h1>Forms</h1>
      <Login userRegister={userRegister} />
    </div>
  );
}

export default Form;
