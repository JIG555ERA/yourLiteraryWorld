import React, { useState, useEffect } from 'react'
import { TopSection } from './homePageComponents/topSection/topSection'
import { MidSection } from './homePageComponents/midSection/midSection'
import './homePage.css'

export const HomePage = () => {
    return (
        <div
        className='home'>
            <TopSection />
            <MidSection />
        </div>
    )
}