import { Link } from "react-router-dom"

import { GetEvolutionChain } from "../../hooks/getEvolutionChain"


export default function EvolutionChain({ id }) {

    const { error, loading, data } = GetEvolutionChain(id)

    if (error) return <div>Something went wrong!</div>
    if (loading) return <div>Loading...</div>


    if (data.pokemon_v2_evolutionchain[0].pokemon_v2_pokemonspecies.length > 1)

        return (
            <div>
                {data.pokemon_v2_evolutionchain[0].pokemon_v2_pokemonspecies.map(pokemon =>
                    <div key={pokemon.id}>
                        <Link  to={`/${pokemon.id}`}>
                            <h2>{pokemon.name}</h2>
                            <img className="pokemon-image" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id.toString().padStart(3, '0')}.png`} alt={pokemon.name} />
                        </Link>
                    </div>
                )}
            </div>
        )
}
