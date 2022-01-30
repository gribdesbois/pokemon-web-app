import { useState } from 'react'
import './App.css'
import PokemonsList from './components/PokemonsList'
import Pokedex from './components/Pokedex'
import { PokemonProvider } from './components/PokemonProvider'
import PokemonForm from './components/PokemonForm'

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonsList/>
        <Pokedex />
      </div>
      <PokemonForm />
    </PokemonProvider>
  )
}

export default App
