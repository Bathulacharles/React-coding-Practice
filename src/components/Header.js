import {Link} from 'react-router-dom'
import React from 'react'

import './Styles.css'
import logo from '../assets/logo.png'
import search_icon from '../assets/search-icon.png'

const Header = () =>{
    return(
        <div className='navbar-container'>
        <img src={logo} alt="logo"/>
        <span className='title'>FREGG</span>
        <ul>
            <Link to='/' className="nav-link">
            <li>Home</li>
            </Link>
            <Link to='/about' className="nav-link">
            <li>About</li>
            </Link>
            <Link to='/service' className="nav-link">
            <li>Service</li>
            </Link>
            <Link to='/contact' className="nav-link">
            <li>Contact Us</li>
            </Link>
        </ul>
        <img src={search_icon} alt="search icon"/>
    </div> 
    )
}
export default Header