import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'


//Image
import PokemonLogo from '../../assets/Images/pokemon-logo.png'

//style
import './style.module.css'



export default function NavBar() {

  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  

  return (
    <div className="nav-container">
        <nav>
            <Link to='/'>
                <img src={PokemonLogo} alt="Pokemon-logo" />
            </Link>
            <input type="text" placeholder='Search Pokemons' onChange={handleChange} value={search}/>
        </nav>

        <Outlet context={[search]}/>
    </div>
  )
}

