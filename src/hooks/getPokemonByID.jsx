import { gql, useQuery } from "@apollo/client";


const GET_POKEMON = gql`
query getPokemonByID($id: Int!){
  pokemon_v2_pokemon(where:{
    id:{
      _eq: $id
    }
  }) {
    name
    id
    weight
    height
    pokemon_v2_pokemonspecy {
      evolution_chain_id
    }
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
}`

export const GetPokemonByID = (id) => {

    const {error, loading, data} = useQuery(GET_POKEMON, {
       variables: {
        id
       } 
    })

    return {
        data,
        error,
        loading
    }

}
