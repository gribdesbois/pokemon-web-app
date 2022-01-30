import { useState } from 'react'
import './App.css'
import PokemonsList from './components/PokemonsList'
import Pokedex from './components/Pokedex'
import { PokemonProvider } from './components/PokemonProvider'
import PokemonForm from './components/PokemonForm'

function App() {
  return (
    <PokemonProvider>
      <div className="main">
        <PokemonsList/>
        <Pokedex />
      </div>
      <div className="form-wrapper">
        <PokemonForm />
      </div>
    </PokemonProvider>
  )
}

export default App
