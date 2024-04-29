import React from 'react';
import Login from './Login';

function Form({isLoggedIn}) {
  return (
    <div>
      <h1>Forms</h1>
      <Login showConfirmPasswordInput={!isLoggedIn} />
    </div>
  );
}
export default Form;
