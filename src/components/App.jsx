import React from 'react';
import Form from './Form';
import '../style.css';

function App () {
  const isLoggedIn = false;

  return (
    <div className="container">
      <Form isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
