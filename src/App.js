<<<<<<< HEAD
import './App.css';
import NavBar from './components/NavBar/NavBar'
import * as React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return <>
  <header>
    <NavBar></NavBar>
  </header>
  <ItemListContainer greeting={"saludo de bienvenida"}/>
  </>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
>>>>>>> 337c191c3c7ccc8cdf8a365e1bf04f988aed3f10
}

export default App;
