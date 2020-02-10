import React from 'react';
import './styles/Press.css'
import { NavLink } from 'react-router-dom'


function Press() {
    return(
        <div className='press-main-container'>
            <NavLink className='back-to-home' to='/'>Back To Home</NavLink>

            <h3 className='press-heading'>Press</h3>
            
            <div className='article-container'>
            <p className='press-desc'>Abdication! to be featured in 10th Anniversary Dream-Up Festival</p>
            <a className='press-link' href='https://www.broadwayworld.com/off-off-broadway/article/ABDICATIONto-Feature-in-10th-Anniversary-Dream-Up-Festival-20190730'target="_blank" rel="noopener noreferrer">Broadway World</a>
            </div>

            <div className='article-container'>
            <p className='press-desc'>"The Lions of 21st Century Live Art" by Jay Michaels, Arts Independent</p>
            <a className='press-link' href='https://artsindependent.wordpress.com/2019/08/06/the-lions-of-theatre/?fbclid=IwAR3Eemgqg683M90xMFuz10nuwh4Uq1MjB0W3XzJCud8aEXvW-lTIs0Ulyh4%C2%A0%C2%A0'target="_blank" rel="noopener noreferrer">Arts Independent</a>
            </div>
            
            <div className='article-container'>
            <p className='press-desc'>Women of the Arts 2019: Naya James & Lucia Bellini – Celebrating Two Art Entrepreneurs</p>
            <a className='press-link' href='https://dramaqueensreviews.wordpress.com/2019/08/20/women-of-the-arts-2019-naya-james-lucia-bellini-celebrating-two-art-entrepreneurs/'target="_blank" rel="noopener noreferrer">Drama Queens Reviews</a>
            </div>

            
            

        </div>
    )
}

export default Press