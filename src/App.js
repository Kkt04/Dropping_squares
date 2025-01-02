import React, { useEffect, useState } from 'react';
import Square from './Square';
import './App.css';

const App = () => {
  const [squares, setSquares] = useState([]);
  const gridWidth = 15;
  const gridHeight = 20;
  const containerWidth = 600; 
  const containerHeight = 800;
  const cellWidth = containerWidth / gridWidth;
  const cellHeight = containerHeight / gridHeight;

  const createSquare = () => {
    const randomColumn = Math.floor(Math.random() * gridWidth);
    const randomX = randomColumn * cellWidth;
    const newSquare = {
      id: Date.now(),
      position: {
        x: randomX,
        y: 0,
      },
    };
    setSquares((prev) => [...prev, newSquare]);
  };

  useEffect(() => {
    const interval = setInterval(createSquare, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="outer-container">
      <div className="grid-container">
        {squares.map((square) => (
          <Square
            key={square.id}
            position={square.position}
            containerHeight={containerHeight}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
