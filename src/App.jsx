import React from 'react';
import pokemon from "./pokemon";
import PokeDex from './PokeDex';
import './App.css'

const App = () => (
    <div>
      <h1 className='App-header'>Pokedex</h1>
      <PokeDex pokemon={pokemon}/>
    </div>
)

export default App;
