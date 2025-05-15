import React, { useState, useEffect } from 'react'
import { Navbar} from './navBar/navbar'
import './topSection.css'

export const TopSection = () => {
    return (
        
        <div
        className='home-top-section'>
            <img 
            className='left-top-lamp'
            src='../src/assets/images/leftTopLamp.svg' alt='Top Left Lamp'>

            </img>

            <Navbar 
            className='navbar'/>

            <img 
            className='right-top-lamp'
            src='../src/assets/images/rightTopLamp.svg' alt='Top Right Lamp'>

            </img>
        </div>
    
    )
}