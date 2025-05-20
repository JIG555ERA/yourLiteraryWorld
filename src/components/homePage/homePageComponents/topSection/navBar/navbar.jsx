import React, { useState } from 'react'
import './navbar.css'

export const Navbar = () => {
    const [activePage, setActivePage] = useState('Home')

    const navItems = [
        { name: 'Home', icon: 'homeIcon', selectedIcon: 'selectedHomeIcon' },
        { name: 'Categories', icon: 'categoryIcon', selectedIcon: 'selectedCategoryIcon' },
        { name: 'Liked', icon: 'favouriteIcon', selectedIcon: 'selectedFavouriteIcon' },
        { name: 'Profile', icon: 'userProfileIcon', selectedIcon: 'selectedUserProfileIcon' }
    ]

    return (
        <div
        className='main-class'>
            <div
            className='logo-section'>
                <img
                className='logo' 
                src="../src/assets/logos/yourLiteraryWorldIcon.svg" alt="Your Literary World Logo" />

            </div>
            <div className='home-top-section-navbar'>
                {navItems.map(item => (
                    <li
                        key={item.name}
                        className={`pages ${activePage === item.name ? 'active' : ''}`}
                        onClick={() => setActivePage(item.name)}
                    >
                        <img
                            className='home-top-section-navbar-icon'
                            src={`../src/assets/icons/${activePage === item.name ? item.selectedIcon : item.icon}.svg`}
                            alt={`${item.name}Icon`}
                        />
                        <p>{item.name}</p>
                    </li>
                ))}
            </div>
            <div
            className='home-top-section-header-section'>
                <h1
                className='home-top-section-header'>
                    Your Literary World
                </h1>
            </div>
        </div>
    )
}
