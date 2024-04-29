import React from 'react';
import Form from './Form';
import '../style.css';

function App () {
  const userRegister = true;

  return (
    <div className="container">
      <Form userRegister={userRegister} />
    </div>
  );
}

export default App;
