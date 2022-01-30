import { useReducer } from 'react'

export const CAPTURE = 'CAPTURE'
export const RELEASE = 'RELEASE'
export const ADD_POKEMON = 'ADD_POKEMON'
export const ADD_POKEMONS = 'ADD_POKEMONS'

const getCapturedPokemons = (capturedPokemons, releasedPokemon) => capturedPokemons
  .filter((pokemon) => pokemon !== releasedPokemon)

const releasePokemon = (releasedPokemon, state) => ({
  pokemons: [...state.pokemons, releasedPokemon],
  capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasedPokemon),
})

const getPokemonsList = (pokemons, capturedPokemons) => pokemons
  .filter((pokemon) => pokemon !== capturedPokemons)

const capturePokemon = (pokemon, state) => ({
  pokemons: getPokemonsList(state.pokemons, pokemon),
  capturedPokemons: [...state.capturedPokemons, pokemon],
})

const addPokemon = (pokemon, state) => ({
  pokemons: [...state.pokemons, pokemon],
  capturedPokemons: state.capturedPokemons,
})

const addPokemons = (pokemons, state) => ({
  pokemons,
  capturedPokemons: state.capturedPokemons,
})

const pokemonReducer = (state, action) => {
  switch (action.type) {
  case CAPTURE:
    return capturePokemon(action.pokemon, state)
  case RELEASE:
    return releasePokemon(action.pokemon, state)
  case ADD_POKEMON:
    return addPokemon(action.pokemon, state)
  case ADD_POKEMONS:
    return addPokemons(action.pokemons, state)
  default:
    return state
  }
}
export const usePokemonReducer = () => useReducer(pokemonReducer, {
  pokemons: [],
  capturedPokemons: [],
})
