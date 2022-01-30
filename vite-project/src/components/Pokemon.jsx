import React from 'react'

function Pokemon({ pokemon, onClick, buttonLabel }) {
  return <tr key={pokemon.name}>
    <td>
      <span>{pokemon.name}</span>
    </td>
    <td>
      <button onClick={onClick(pokemon)}>{buttonLabel}</button>
    </td>
  </tr>
}

export default Pokemon
