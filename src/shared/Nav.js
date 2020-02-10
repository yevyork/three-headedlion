import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles/Nav.css'
import home from '../assets/hero.jpg'

function Nav() {
    return(
        <div>
    <div className='nav-main-container'>
        <NavLink className='navlink' activeClassName='active' to='/past'>Works</NavLink>
        <NavLink className='navlink' activeClassName='active' to='/lions'>Lions</NavLink>
        <NavLink className='navlink' activeClassName='active' to='/press'>Press</NavLink>
        <NavLink className='navlink' activeClassName='active' to='/contact'>Contact</NavLink>
        </div>
        <div className='nav-home-container'>
        <NavLink className='navlink homelogo' activeClassName='' to='/'><img src={home} alt='home' className='homelink-img' /></NavLink>
        </div>
        </div>
    )}

export default Nav