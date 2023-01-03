import { color } from "../../assets/Colors"

import './style.css'

export default function Card({ pokemon }) {

  const type = pokemon.pokemon_v2_pokemontypes.map(t => t.pokemon_v2_type.name)

  const pokemonColor = color[type[0]]

  const numFormatted = pokemon.id.toString().padStart(3, '0')
  const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)


  return (
    <div className="pokemons" style={{borderColor: pokemonColor}}>
      <div className="item-top">
        <p className="text-ID" style={{color: pokemonColor}}>#{numFormatted}</p> 
        <img className="pokemon-image" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numFormatted}.png`} alt={pokemon.name}/>
      </div>

      <div className="item-bottom" style={{backgroundColor: pokemonColor}}>
        <h3 className="pokemon-name">{capitalizedName}</h3>
      </div>
      
    </div>
  )
}


