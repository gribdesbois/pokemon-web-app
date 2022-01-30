import React, { useContext, useState } from 'react'
import { PokemonContext } from './PokemonProvider'
import listPokemons from './listPokemons'

function Pokedex() {
  const {
    capturedPokemons,
    release,
  } = useContext(PokemonContext)

  /* const releasePokemon = (releasedPokemon) => {
    capturedPokemons.filter((pokemon) => pokemon !== releasedPokemon)
  }

  const release = (pokemon) => () => {
    setCapturedPokemons(releasePokemon(pokemon))
    setPokemons([...pokemons, pokemon])
  } */

  return (
    <div className="pokedex">
      <h2>Pokedex</h2>

      <table>
        <tr>
          <th>Pokemon</th>
          <th>Release</th>
        </tr>
        {listPokemons({
          pokemons: capturedPokemons,
          onClick: release,
          buttonLabel: '-',
        })}
      </table>
    </div>
  )
}

export default Pokedex
