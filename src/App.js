import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The current time is: {currentTime.toLocaleTimeString()}
        </p>
        <a
          className="App-link"
          href="https://theuselessweb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for a surprise!
        </a>
      </header>
    </div>
  );
}

export default App;
