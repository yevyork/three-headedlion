import React from 'react';
import abdication from '../assets/abdication.jpg'
import './styles/Past.css'
import { NavLink } from 'react-router-dom'
import ImageCarousel from '../shared/ImageCarousel'



function Past() {
    return(
        <div className='past-main-container'>
                        <NavLink className='back-to-home' to='/'>Back To Home</NavLink>

            <div className='work-container'>
                <img className='work-img' src={abdication} alt='abd'/>
                <h3>Abdication!</h3>
                <p className='work-description'>A darkly comedic multimedia romp, Abdication! spins a tale of relatable characters grappling with two choices: 1. fight for their independence of thought and feeling, or 2. abdicate their responsibilities and succumb to a life that’s easier in the short run.

A tongue-in-cheek view of technocratic society, it depicts the near future not only with dystopian gloom but with a heavy dose of humor, shining a light on our shared human experience while faced with this critical question. What would you give up?</p>
<p className='work-description'>Photos!</p>
<p className='photo-credit'>Credit: Liz Devine</p>
<ImageCarousel />
            </div>

        </div>
    )
}

export default Past;