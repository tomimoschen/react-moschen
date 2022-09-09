import './styles/App.css';
import NavBar from './components/NavBar/NavBar'
import * as React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return <>
  <header>
    <NavBar></NavBar>
  </header>
  <ItemListContainer greeting={"Productos"}/>
  </>
}

export default App;
