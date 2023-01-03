import { useParams } from "react-router-dom"

import { GetPokemonByID } from "../../hooks/getPokemonByID"

import PokemonType from '../../components/PokemonType'
import EvolutionChain from "../../components/EvolutionChain"

export default function Details() {

  const { id } = useParams()
  const { error, loading, data } = GetPokemonByID(id)

  if (error) return <div>Something went wrong!</div>
  if (loading) return <div>Loading...</div>

  const numFormatted = data.pokemon_v2_pokemon[0].id.toString().padStart(3, '0')

  return (

      <div>
          <h1>{data.pokemon_v2_pokemon[0].name}</h1>
          <h2>{data.pokemon_v2_pokemon[0].height/10} m</h2>
          <h3>{data.pokemon_v2_pokemon[0].id}</h3>
          <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numFormatted}.png`} alt="" />
          <h3>{data.pokemon_v2_pokemon[0].pokemon_v2_pokemontypes.pokemon_v2_type}</h3>
          <PokemonType type={data.pokemon_v2_pokemon[0].pokemon_v2_pokemontypes}/>

          <EvolutionChain id={data.pokemon_v2_pokemon[0].pokemon_v2_pokemonspecy.evolution_chain_id}/>
      </div>
  );  
}