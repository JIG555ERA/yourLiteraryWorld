import React, { useState, useEffect, useRef } from "react";
import ColorThief from "colorthief";
import './card.css'

const BookCard = ({ book }) => {
    const [colors, setColors] = useState([[255, 255, 255], [200, 200, 200]]);
    const imgRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;
        const colorThief = new ColorThief();

        const handleLoad = () => {
            if (img && img.complete) {
                try {
                    const palette = colorThief.getPalette(img, 2);
                    setColors(palette);
                } catch (e) {
                    console.error("ColorThief error:", e);
                }
            }
        };

        if (img) {
            img.crossOrigin = "Anonymous";
            if (img.complete) {
                handleLoad();
            } else {
                img.addEventListener("load", handleLoad);
                return () => img.removeEventListener("load", handleLoad);
            }
        }
    }, [book.bookCoverPage]);

    const handleAddToCart = () => {

    }

    return (
        <div className="card">
            <div className="image-section">
                <div
                className="container">
                    {/* main book image */}
                    <div>
                        <img
                            ref={imgRef}
                            className="book-image"
                            src={book.bookCoverPage}
                            alt="book"
                            crossOrigin="anonymous"
                        />
                    </div>
                    {/* back cover */}
                    <div 
                    className="backCover"
                    style={{ backgroundColor: `rgb(${colors[0].join(",")})`, width:'132px', height:'158px', zIndex: 2, borderBottomLeftRadius: '5px'}} />
                    {/* white page */}
                    <div 
                    className="whitePage"
                    style={{ backgroundColor: "white" }} />
                    {/* back cover right double lines */}
                    {/* first line */}
                    <div 
                    className="first-line"/>
                    {/* second line */}
                    <div 
                    className="second-line"/>
                    {/* third line */}
                    <div 
                    className="third-line"/>
                    {/* book mark */}
                    <div 
                    className="bookMark" />
                    {/* front cover page */}
                    <div 
                    className="frontCoverPage"
                    style={{ backgroundColor: `rgb(${colors[0].join(",")})` }} />
                    {/* front cover page left double lines */}
                    <div 
                    className="frontLine"
                    style={{ backgroundColor: `rgb(${colors[1].join(",")})` }} />

                    

                </div>
            </div>
            <div className="info-section">
                <div
                className="container-2">
                    <p
                    className="book-title">
                        {book.bookTitle}
                    </p>
                    <p
                    className="book-author">
                        {book.bookAuthor}
                    </p>
                    <p
                    className="book-price">
                        ₹ {book.bookPrice}
                    </p>
                    
                </div>
            </div>
            <div
                onClick={handleAddToCart}
                className="add-to-cart-button">
                    <p
                    className="add-to-cart-text">
                        Add to Cart
                    </p>
            </div>
        </div>
    );
};

export default BookCard;
