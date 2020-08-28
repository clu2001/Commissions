import React, { useState, useEffect } from 'react'; 
import Routes from './router'; 
import classNames from "classnames"; 

function App() {

  const Cursor = () => {

    const [position, setPosition] = useState({x:0, y:0}); 
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);  

    useEffect(() => {
      addEventListeners(); 
      return () => removeEventListeners(); 
    }, []); 

    const addEventListeners = () => {
      document.addEventListener("mousemove", onmousemove); 

      document.addEventListener("mouseenter", onmouseenter); 
      document.addEventListener("mouseleave", onmouseleave); 

      document.addEventListener("mousedown", onmousedown); 
      document.addEventListener("mouseup", onmouseup); 
    }; 

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onmousemove);

      document.addEventListener("mouseenter", onmouseenter); 
      document.addEventListener("mouseleave", onmouseleave); 

      document.addEventListener("mousedown", onmousedown); 
      document.addEventListener("mouseup", onmouseup); 
    }; 

    const onmousemove = (e) => {
      setPosition({x: e.clientX, y: e.clientY}); 
    }; 

    const onmouseenter = () => {
      setHidden(false); 
    }

    const onmouseleave = () => {
      setHidden(true); 
    }

    const onmousedown = () => {
      setClicked(true); 
    }; 

    const onmouseup = () => {
      setClicked(false); 
    }; 

    const cursorClasses = classNames(
      'cursor',
      {
        'cursor--clicked': clicked, 
        'cursor--hidden': hidden
      }
    )

    return <div className={cursorClasses} 
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