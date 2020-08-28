import React from 'react'; 
import Routes from './router'; 

function App() {

  const Cursor = () => {
    return <div className="cursor" />
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