import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router } from "react-router-dom"; 

import Routes from './router'; 
import HomeButton from './homeButton';
import Home from './Home';
import FormButton from './FormButton';
import CommissionButton from './CommissionButton';

function App() {

  return (
    <div className="App">
      <h1>Hello I am app component</h1>
      <Routes />
    </div>
  ); 

}

export default App; 