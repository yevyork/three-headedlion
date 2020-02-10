import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles/Contact.css'

function Contact() {
    return(
        <div className='form-container'>
<NavLink className='back-to-home' to='/'>Back To Home</NavLink>
<p>this is form</p>
        <form>
            <label htmlFor='name'/>
            <input
            placeholder='name'
            value=''
            name=''
            required
            onChange
            />

            <label />
            <input />

        </form>
        </div>
    )
}

export default Contact;