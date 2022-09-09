import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    
    <nav>
 <NavLink exact to="/">Home</NavLink >
 <NavLink to="/appointments">Appointment</NavLink >
 <NavLink to="/about">About</NavLink >




    </nav>
    
  )
}

export default NavBar