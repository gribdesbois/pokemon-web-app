import React from 'react'
import Pokemon from './Pokemon'

const listPokemons = ({ pokemons, onClick, buttonLabel }) => pokemons.map((pokemon) => (
  <Pokemon pokemon={pokemon} onClick={onClick} buttonLabel={buttonLabel}/>
))

export default listPokemons
