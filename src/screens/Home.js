import React from 'react';
import './styles/Home.css'
import heroimg from '../assets/hero.jpg'

import firstsred from '../assets/firsts-red.jpg'

function Home() {
    return(
        <div className='home-main-container'>
            <div className='hero-container'>
            <p className='thl'><strong className='th'>Three-Headed Lion</strong><br></br>Productions</p>
            <img className='heroimg' src={heroimg} alt='hero' />
            </div>
            <div className='line'></div>

            <div className='next-up-container'>
                <p className='next-up-text'>Next up from the Lions:</p>
                <img src={firstsred} alt='next' className='next-up-img'/><br></br>
                
                <p className='next-up-description'><strong>Firsts</strong>, a poignant and often hilarious look into the minds of two people on a first date, shows how much we really have in common—if only we were brave enough to admit it! </p>
                <a href='https://www.therianttheatre.com/item.php?id=415' target="_blank" rel="noopener noreferrer" className="tickets">GET TICKETS</a>

            </div>
            <div className='line'></div>

            <div className='coming-soon-container'>
                <p className='next-up-text'>Coming Soon:</p>
                <h3 className='coming-soon-title'>STUCK</h3>
                <div className='video-container'>
                <iframe title='trailer' width="315" src="https://www.youtube.com/embed/3DW_R45J9iI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className='line'></div>
            </div>
            <h3>Our Story</h3>
            <p className='about'>Three-Headed Lion Productions was formed in 2019 by Lucia Bellini, Naya James, and Trenton Clark.<br></br> Having worked on several projects together over the years, it became clear that they shared a love of drama—in the best way possible. Independently, each one of these creatively-charged Leos had way too many ideas and aspirations for one person—so it became clear that the way forward was to join forces! Luckily (and not so much at times) thus far, this trio has been blessed will all kinds of artistic opportunity and fulfillment—participating in the Dream Up Festival, producing a short film to be released in early 2020, and developing a brand new full length play. 
True story—shortly after the formation of the company, they had to take a road trip to pick up an obscure prop, in another state, from a stranger’s house on Craigslist. The moment they pulled into the driveway, they were met with a giant statue of a three-headed lion that this person just happened to have in their driveway for no apparent reason! <br></br><br></br>Since then, they have felt creepily reassured and excited about their endeavors.</p>



        </div>
    )
}

export default Home;