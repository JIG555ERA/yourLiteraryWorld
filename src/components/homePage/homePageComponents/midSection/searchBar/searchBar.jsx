import React, { useState, useEffect } from "react";
import './searchBar.css'

export const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('')
    const [ searchBarClassName, setSearchBarClassName ] = useState('search-bar')
    const [ searchContainer, setSearchContainer ] = useState('search-container')

    const handleSearchBar = () => {
        setSearchBarClassName('extended-search-bar')
        setSearchContainer('extended-search-container')
    }

    return (
        <div
        className="container">
            <div
            className="search-section"
            >
                <div
                className={searchContainer}>
                    <input 
                    onClick={handleSearchBar}
                    value={(e) => {setSearchValue(e.target.value)}}
                    className={searchBarClassName}
                    type="text" 
                    placeholder=""/>
                </div>
                <button
                className="search-button">
                    <div
                    className="button-container">
                        <img 
                        className="search-icon"
                        src="../src/assets/icons/searchIcon.svg" alt="search icon" />
                    </div>
                </button>
            </div>
        </div>
    )
}