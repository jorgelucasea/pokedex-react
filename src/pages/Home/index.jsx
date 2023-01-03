import { Link, useOutletContext } from "react-router-dom"

import Card from "../../components/Card";

import { GetPokemons } from '../../hooks/getPokemons'

import './style.css'


export default function Home() {

  const {error, data, loading} = GetPokemons()

  const [search] = useOutletContext()

  if(error) {
    return <div>Something Went Wrong</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
      
        <div className="pokelist">
          {data.pokemon_v2_pokemon
            .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map(pokemon => (
              <Link key={pokemon.id} to={`${pokemon.id}`}>
                <Card pokemon={pokemon}/>
              </Link>
          ))}
        </div>
  );
}






