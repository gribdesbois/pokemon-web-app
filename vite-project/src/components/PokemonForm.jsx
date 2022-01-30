import React, { useContext, useState } from 'react'
import { generateID } from '../services/generateID'
import { PokemonContext } from './PokemonProvider'

function PokemonForm() {
  const [pokemonName, setPokemonName] = useState()
  const { addPokemon } = useContext(PokemonContext)

  const handleFormSubmit = (event) => {
    event.preventDefault()
    addPokemon({
      id: generateID(),
      name: pokemonName,
    })
  }

  const handleNameChange = (event) => {
    setPokemonName(event.target.value)
  }

  return <form onSubmit={handleFormSubmit}>
    <input type="text" placeholder='pokemon name' onChange={handleNameChange}/>
    <input type="submit" value='Add'/>
  </form>
}

export default PokemonForm
