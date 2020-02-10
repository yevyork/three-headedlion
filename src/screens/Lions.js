import React from 'react';
import Lu from '../assets/lu-hs.jpg'
import Naya from '../assets/naya-hs.jpg'
import Trenton from '../assets/trenton-hs.jpg'
import './styles/Lions.css'
import { NavLink } from 'react-router-dom'
// import lions from '../services/seed'

class Lions extends React.Component {
    constructor() {
        super()
        this.state = {
            lions : []
        }
    }

    componentDidMount() {
        
    }
    getLions() {
        this.setState({ lions : []})
        console.log(this.state.lions)
    }
    render() {
    return(
        <div className='lions-main-container'>
                        <NavLink className='back-to-home' to='/'>Back To Home</NavLink>

            <h3 className='lions'>Meet The Lions</h3>
            <br></br>
            <div className='lion-container'>
                <img className='lion-headshot' src={Lu} alt='lion' />
                <h3>Lucia Bellini</h3>
                <p className='lion-bio'>Director and actor for film and theatre. Founding member of Three-Headed Lion Productions and Bad Babies Films. Lu is proud to have won the award for Outstanding Direction of a Staged Reading for Who Mourns For Bob The Goon? at the 2015 Planet Connection Festivities, followed by a run of the show at the HERE Arts Center in the Summer of 2016. Her collaboration with the Festivities continued assisting Glory Kadigan for PFAC 2017 and 2018. Recent credits include: direction of the 2018 Planet Connection Festivities Award Ceremony at the Abrons Arts Center’s Playhouse Theatre. Assistant director to Glory Kadigan for The Floor is Lava at La Mama Experimental Theatre. ABDICATION! by Naya James, a full length play presented at the Dream Up Festival, Summer 2019. Currently playing: DARK PLANET: Not Your Mother’s Valentine’s Day, direction of short plays by Monica Bauer, Gabrielle Fox, and Drew Larimore, running at the 14th Street Y through February 21st. Catch Lu on stage at Winterfest performing in LOVE/SICK by John Cariani starting February 24th. Keep an eye out for upcoming screenings of the Lions’ most recent short film STUCK by Naya James, in collaboration with East 10th Street Productions.</p>
            </div>

            <div className='lion-container'>
                <img className='lion-headshot' src={Trenton} alt='lion' />
                <h3>Trenton Clark</h3>
                <p className='lion-bio'>Trenton is an actor, writer, and director in New York City. He is a member of and resident director with the Wednesday Repertory Company, for which he has mounted several one-act plays. A graduate of the American Musical and Dramatic Academy in NY, he has studied the craft for over 20 years on both coasts, as well as his home state of New Mexico. New York Theater credits: Hamlet, Hamlet; Lucius, Titus Andronicus (Hudson Warehouse); Rope; The Head Hunter; Wilde Nights (St. Francis College). Tours: 42nd Street.Regional and other: 42nd Street, Beauty & the Beast (Papermill Theater); Happily Whatever After(New World Stages Hollywood, LA). Trenton is thrilled to be launching Three-Headed Lion Productions in partnership with Naya & Lu. </p>
            </div>

            <div className='lion-container'>
                <img className='lion-headshot' src={Naya} alt='lion' />
                <h3>Naya James</h3>
                <p className='lion-bio'>Writer, actor and producer in New York City. Resident actor and writer in the Wednesday Repertory Company, CEO Anjali Productions, an independent film production company focused on stories of the evolution of human consciousness. Writing credits include 12 original one-act plays produced in festivals all over New York, including Theater 54, The Paradise Factory, The Algonquin, and the Richmond Shepard Theater, and three short films, which she also produced. In addition to the world premiere of Abdication!  Naya can also be seen this summer as the lead in the film “Indigo” by Garfield Boston.</p>
            </div>
            
        </div>
    )
}
}

export default Lions