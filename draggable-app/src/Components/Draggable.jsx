import React, { useState, useRef } from 'react';
import './Draggable.css';

const Draggable = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragRef = useRef(false);
  const offsetRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (ele) => {
    dragRef.current = true;
    offsetRef.current = {
      x: ele.clientX - position.x,
      y: ele.clientY - position.y,
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (ele) => {
    if (dragRef.current) {
      setPosition({
        x: ele.clientX - offsetRef.current.x,
        y: ele.clientY - offsetRef.current.y,
      });
    }
  };

  const handleMouseUp = () => {
    dragRef.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="draggable" style={{ left: position.x, top: position.y,  }}>
      <div className="title" onMouseDown={handleMouseDown}>
        Title
      </div>
      <div className="children">
        {children}
      </div>
    </div>
  );
};

export default Draggable;
