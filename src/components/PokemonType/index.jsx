import { color } from "../../assets/Colors"

import './style.css'

export default function PokemonType({ type }) {

  const typesName = type.map(t => t.pokemon_v2_type.name)

  return (
    <div className="type-container">
      {typesName.map(name => (
        <p style={{backgroundColor: color[name]}}>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      ))}
    </div>
  )
}

// type.map(t => (
//   <p style={{backgroundColor: color[t.pokemon_v2_type.name]}} key={t.pokemon_v2_type.name}>{t.pokemon_v2_type.name.charAt(0).toUpperCase() + t.pokemon_v2_type.name.slice(1)}</p>
// ))
