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
                    {/* back cover */}
                    <div style={{ backgroundColor: `rgb(${colors[0].join(",")})`, width:'134px', height:'158px', zIndex: 3}} />
                    {/* back cover right double lines */}
                    <div style={{ backgroundColor: "white" }} />
                    {/* white page */}
                    <div style={{ backgroundColor: "white" }} />
                    {/* book mark */}
                    <div style={{ backgroundColor: `rgb(${colors[1].join(",")})` }} />
                    {/* front cover page */}
                    <div style={{ backgroundColor: `rgb(${colors[1].join(",")})` }} />
                    {/* front cover page left double lines */}
                    <div style={{ backgroundColor: `rgb(${colors[1].join(",")})` }} />

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
