import React from 'react'
import { NavLink } from 'react-router-dom'


const activeStyle ={
    color: 'rgb(187, 46,31'
}

export default function Nav(){

    return(

        <nav className='row space-between'>
        <ul className='row nav'>
        <li> 
        <NavLink to='/' 
        activeStyle={activeStyle}
        className='nav-link'>Register</NavLink>

        </li>
        <li>
        <NavLink to='/login' 
        activeStyle={activeStyle}
        className='nav-link'>Login</NavLink>
        </li>
        </ul>
        </nav>
       
    )
}