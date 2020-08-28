import React, { useState, useEffect } from 'react'; 
import Routes from './router'; 
import classNames from "classnames"; 

function App() {

  const Cursor = () => {
    const [position, setPosition] = useState({x:0, y:0}); 

    useEffect(() => {
      addEventListeners(); 
      return () => removeEventListeners(); 
    }, []); 

    const addEventListeners = () => {
      document.addEventListener("mousemove", onmousemove); 
    }; 

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onmousemove);
    }; 

    const onmousemove = (e) => {
      setPosition({x: e.clientX, y: e.clientY}); 
    }; 

    return <div className="cursor" 
            style={{
                left: `${position.x}px`, 
                top: `${position.y}px`
            }}/>
  }

  return (
    <div>
      <div className="App">
        <Routes />
      </div>
      <div>
        <Cursor />
      </div>
    </div>
  ); 
}

export default App; 