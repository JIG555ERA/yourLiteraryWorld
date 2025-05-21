import React, { useState, useEffect, useRef } from 'react'
import './authorSection.css'

export const AuthorSection = () => {
    
    const handleViewAll = () => {

    }

    const authorDetails= [
        {authorId: 0, authorName: 'Oscar Wild', authorImage: 'author01', authorOrigin: 'Ireland', authorDescription: "Oscar Fingal O'Fflahertie Wills Wilde was an Irish author,  poet, and playwright. After writing in different literary styles", authorTopBooks: []},
        {authorId: 1, authorName: 'James Baldwin', authorImage: 'author02', authorOrigin: 'America', authorDescription: "James Arthur Baldwin was an African-American writer and civil rights activist who garnered acclaim", authorTopBooks: []},
        {authorId: 2, authorName: 'Paul ...', authorImage: 'author03', authorOrigin: 'Brazil', authorDescription: "Oscar Fingal O'Fflahertie Wills Wilde was an Irish author,  poet, and playwright. After writing in different literary styles", authorTopBooks: []}
    ]

    return (
        <div 
        className="author-section-main">
            <div 
            className="author-listing-title-section">
                <div 
                className="selected-categroy-title-section">
                    <p 
                    className="selected-category-title">
                        Top Author Collection
                    </p>
                </div>
                <div 
                className="books-listing-title-buttons-section">
                    <div 
                    onClick={handleViewAll}
                    className="view-all-button">
                        <div
                        className="view-all-button0">
                            <p
                            className="view-all-text">
                                View All
                            </p>
                        </div>
                    </div>
                    <div className="scroll-button-section">
                        <div className="scroll-button">
                            <img
                                className="left-scroll-button-image"
                                src="../src/assets/icons/leftScrollButton.svg"
                                alt="left scroll"
                            />
                        </div>
                        <div className="scroll-button">
                            <img
                                className="right-scroll-button-image"
                                src="../src/assets/icons/rightScrollButton.svg"
                                alt="right scroll"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
            className='author-card-section'>
                {authorDetails.map((author) => (
                    <div
                    key={author.authorId}
                    className='author-card'>
                        <div
                        className='author-image-section'>
                            <img 
                            className='author-image'
                            src={`../src/assets/authorImages/${author.authorImage}.svg`} 
                            alt="" />
                        </div>
                        <div
                        className='author-description-section'>

                        </div>

                    </div>
                ))

                }

            </div>
        </div>
    );
};
