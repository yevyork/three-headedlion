import React from 'react';
import Header from './Header'
import Routes from '../routes'
import Footer from './Footer'
import './styles/Container.css'


function Container () {
        return ( 
            <div className='main'>
                <Header />
                <div className='content'>
                <Routes />
                </div>
                <Footer />
            </div>
        );
    }


export default Container;