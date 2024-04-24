import React from 'react';
import PokeCard from './PokeCard';
// import './PokeDex.css'

const PokeDex = ({ pokemon }) => {
 return (
        <>
          {pokemon.map(p => (
          <PokeCard id={p.id} 
                    name={p.name} 
                    type={p.type} 
                    base_experience={p.base_experience}/>
            ))
          }
        </> 
        ) 
    }

export default PokeDex;
