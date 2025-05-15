import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './navbar.css'

export const Navbar = () => {

    const [ activePage, setActivePage ] = useState('Home')

    return (
        <>
            <div
            className='home-top-section-navbar'
            >
                <li 
                className={`pages ${activePage === 'Home' ? 'active' : ''}`}
                onClick={() => setActivePage('Home')}
                >
                    <img 
                    className='home-top-section-navbar-icon'
                    src={activePage === 'Home' ? '../src/assets/icons/selectedHomeIcon.svg' : '../src/assets/icons/homeIcon.svg'} alt="homeIcon" 
                    />
                    <p>Home</p>
                </li>
                <li 
                className={`pages ${activePage === 'Categories' ? 'active' : ''}`}
                onClick={() => setActivePage('Categories')}
                >
                    <img 
                    className='home-top-section-navbar-icon'
                    src={activePage === 'Categories' ? '../src/assets/icons/selectedCategoryIcon.svg' : '../src/assets/icons/categoryIcon.svg'} alt="categoryIcon" 
                    />
                    <p>Categories</p>
                </li>
                <div 
                className='logo'
                >
                    <img 
                    className='home-top-section-navbar-logo'
                    src="../src/assets/logos/yourLiteraryWorldIcon.svg" alt="yourLiteraryWorldLogo" 
                    />
                </div>
                <li 
                className={`pages ${activePage === 'Liked' ? 'active' : ''}`}
                onClick={() => setActivePage('Liked')}
                >
                    <img 
                    className='home-top-section-navbar-icon'
                    src={activePage === 'Liked' ? '../src/assets/icons/selectedFavouriteIcon.svg' : '../src/assets/icons/favouriteIcon.svg'} alt="favouriteIcon" 
                    />
                    <p>Liked</p>
                </li>
                <li 
                className={`pages ${activePage === 'Profile' ? 'active' : ''}`}
                onClick={() => setActivePage('Profile')}
                >
                    <img 
                    className='home-top-section-navbar-icon'
                    src={activePage === 'Profile' ? '../src/assets/icons/selectedUserProfileIcon.svg' : '../src/assets/icons/userProfileIcon.svg'} alt="userProfileIcon" 
                    />
                    <p>Profile</p>
                </li>
            </div>
        </>
    )
}