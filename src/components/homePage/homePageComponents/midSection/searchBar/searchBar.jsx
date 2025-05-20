import React, { useState, useEffect } from "react";
import './searchBar.css'

export const SearchBar = () => {
    return (
        <div
        className="container">
            <div
            className="search-section"
            >
                <div
                className="search-container">
                    <input 
                    className="search-bar"
                    type="text" />
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