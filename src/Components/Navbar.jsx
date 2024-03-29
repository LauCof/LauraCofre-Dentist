import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from '../Context'

const Navbar = () => {
    const {theme, theme: {toggleTheme}} = useDentistStates();
    
  return (
    <nav>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/cart'><h3>Favs</h3></Link>
        <Link to='/contact'><h3>Contact</h3></Link>
        <button className= "custom-button" onClick ={toggleTheme}>Cambio Theme</button>
    </nav>
  )
}

export default Navbar