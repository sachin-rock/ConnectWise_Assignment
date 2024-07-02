import React, { useState } from 'react';
import Draggable from './Components/Draggable';
import './App.css';

const App = () => {
  const [nestedComponents, setNestedComponents] = useState([<Draggable key={0}></Draggable>]);

  const addParent = () => {
    setNestedComponents([<Draggable key={nestedComponents.length}>{nestedComponents}</Draggable>]);
  };

  return (
    <div className="App">
      <button onClick={addParent}>Add Parent</button>
      <div className="draggable-container">
        {nestedComponents}
      </div>
    </div>
  );
};

export default App;
