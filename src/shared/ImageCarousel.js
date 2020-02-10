import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './styles/ImageCarousel.css'
import three from '../assets/carousel/3.jpg'
import four from '../assets/carousel/4.jpg'
import five from '../assets/carousel/5.jpg'
import six from '../assets/carousel/6.jpg'

const ImageCarousel = () => {
    const handleOnDragStart = (e) => e.preventDefault()
    return (
        <AliceCarousel
        buttonsDisabled={true}
        autoHeight={true}
        >
           
            <img src={three} className='carousel-img' alt='gl'/>
            <img src={four} className='carousel-img' alt='gl'/>
            <img src={five} className='carousel-img' alt='gl'/>
            <img src={six} className='carousel-img' alt='gl'/>

        </AliceCarousel>
    )
}

export default ImageCarousel;