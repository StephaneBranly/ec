import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Emergency Card. Work In Progress. Contact me if you are interested by this project.
        </p>
      </header> */}
      <Card />
    </div>
  );
}

export default App;
