import { useState } from 'react'
import './App.css'
import PokemonsList from './components/PokemonsList'
import Pokedex from './components/Pokedex'
import PokemonProvider from './components/PokemonProvider'

function App() {
  <PokemonProvider>
    <div className="App">
      <PokemonsList/>
      <Pokedex />
    </div>
  </PokemonProvider>
}

export default App
