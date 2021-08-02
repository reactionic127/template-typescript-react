import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const updateState = (event: any) => {
    setText(event.target.value)
  }

  return (
    <div data-testid="app-wrapper">
      <input
        onChange={(event) => updateState(event)}
        type="text"
        data-testid="app-input"
      />
    </div>
  );
}

export default App;
