import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');

  const updateState = (event: any) => {
    setInputText(event.target.value)
  }

  return (
    <div data-testid="app-wrapper">
      <input
        value={inputText}
        onChange={(event) => updateState(event)}
        type="text"
        data-testid="app-input"
      />
    </div>
  );
}

export default App;
