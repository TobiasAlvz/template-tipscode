import React from 'react';
import Form from './Form';
import '../style.css';

function App () {
  const isLoggedIn = true;

  return (
    <div className="container">
      <Form isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
