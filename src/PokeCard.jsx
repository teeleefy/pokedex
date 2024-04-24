import React from 'react'

import './PokeCard.css'

const PokeCard = ({id, name, type, base_experience}) => (
  <div className='PokeCard'>
      <h1 className='PokeCard-header'>{name}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
  </div>
)

export default PokeCard
