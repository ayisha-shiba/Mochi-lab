import React from 'react';
import Mochi from './components/Mochi';
import Controls from './components/Controls';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">Mochi Lab</h1>
        <p className="instruction">Drag the mochi to see it squish and bounce!</p>
      </header>
      
      <main className="main-content">
        <Mochi />
        <Controls />
      </main>
    </div>
  );
}

export default App;
