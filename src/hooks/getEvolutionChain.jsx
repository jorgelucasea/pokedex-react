import { gql, useQuery } from "@apollo/client";

const GET_EVOLUTION_CHAIN = gql`
query getEvolutionChainByID($id: Int!) {
  pokemon_v2_evolutionchain (where:{
    id:{
      _eq: $id
    }
  }){
    pokemon_v2_pokemonspecies {
      evolves_from_species_id
      name
      id
    }
  }
}`

export const GetEvolutionChain = id => {
    const { error, loading, data } = useQuery(GET_EVOLUTION_CHAIN, {
        variables: {
            id
        }
    })

    return {
        error,
        loading,
        data
    }
}