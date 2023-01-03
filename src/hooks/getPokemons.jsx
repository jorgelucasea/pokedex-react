import { gql, useQuery } from "@apollo/client"

const GET_POKEMONS = gql`
query {
  pokemon_v2_pokemon (limit: 151){
    name
    id
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
        id
      }
    }
  }
}
`

export const GetPokemons = () => {
    
    const {error, data, loading} = useQuery(GET_POKEMONS)

    return {
        error,
        data,
        loading
    }
}