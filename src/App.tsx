import React from 'react';
import './styles/index.scss';
import { Header } from './components/header/Header';
import { Info } from './components/info/Info';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Info></Info>
    </div>
  );
}

export default App;
