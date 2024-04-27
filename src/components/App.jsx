import React from 'react';
import Form from './Form';
import '../style.css';

let isLoggeIn = false;

function renderConditionally () {
  return isLoggeIn === true ? <h1>Bem-Vindo</h1> : <Form />;
}

function App () {
  return (
    <div className="container">
      {renderConditionally ()}
    </div>
  );
}

export default App;
