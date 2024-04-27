import React from 'react';
import Form from './Form';
import '../style.css';

let isLoggeIn = true;

function renderConditionally () {
  if (isLoggeIn === true) {
    return <h1>Bem-Vindo</h1>;
  } else {
    <Form />;
  }
}

function App () {
  return (
    <div className="container">
      {renderConditionally ()}
    </div>
  );
}

export default App;
