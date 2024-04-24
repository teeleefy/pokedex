import React from 'react';
import pokemon from "./pokemon";
import PokeDex from './PokeDex';
import './App.css'
let imageName = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4Y8z_gpDMY37eEXYA_Azm5go-MXmfA9ABA&s';
const App = () => (
    <div>
      <h1 className='App-header'><img className='App-logo' src={imageName} alt="" /> Pokedex <img className='App-logo' src={imageName} alt="" /></h1>
      <PokeDex pokemon={pokemon}/>
    </div>
)

export default App;
