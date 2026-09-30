import React from 'react';

export default function Mochi() {
  return (
    <div className="mochi-container">
      <span className="canvas-hint">Canvas Area</span>
      <div className="mochi-canvas-placeholder">
        {/* We will eventually render a real canvas here */}
        <div className="mochi-blob"></div>
      </div>
    </div>
  );
}
