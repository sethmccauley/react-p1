import React, { useState } from 'react';
import logo from './logo.svg';
import MyComp from './myComp'
import './App.css';

let index = 20;

function App() {
  const [count, setCount] = useState(10);

  function myOnClickCount(e) {
    setCount(count + 1)
    console.log('Clicked.', count)
  }

  function myOnClickIndex() {
    index++;
    console.log('Clicked.', index)
  }

  return (
    <div className="App">
      <div>
        <h2 onClick={myOnClickCount}>Hello World: count @ {count}</h2>
        <h2 onClick={myOnClickIndex}>Second Heading: index {index}</h2>
        <MyComp count={count} increment={myOnClickCount}/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
