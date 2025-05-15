import React, { useState, useEffect } from 'react'
import { TopSection } from './homePageComponents/topSection/topSection'
import './homePage.css'

export const HomePage = () => {
    return (
        <div
        className='home'>
            <TopSection />
        </div>
    )
}