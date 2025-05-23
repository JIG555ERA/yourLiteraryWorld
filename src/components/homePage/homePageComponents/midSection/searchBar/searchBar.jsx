import React, { useState, useEffect, useRef } from "react";
import "./searchBar.css";

export const SearchBar = () => {
  const [active, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const tags = [
    { tagId: 1, tagName: "Book Name" },
    { tagId: 2, tagName: "Author" },
    { tagId: 3, tagName: "Genre" },
    { tagId: 4, tagName: "Language" },
  ];

  const suggestionSectionCard = [
    { bookId: 0, bookName: "Klara and the sun", authorName: "Kazuo Ishihuro", bookImage: '', languageTag: 'English', genreTag: 'Fiction', price: 199},
    { bookId: 1, bookName: "Save me the waltz", authorName: "Zelda Fitzgerald", bookImage: '', languageTag: 'English', genreTag: 'Romance', price: 99 },
    { bookId: 2, bookName: "In a thousand different ways", authorName: "Cecelia Ahern", bookImage: '', languageTag: 'English', genreTag: 'Classics', price: 229 },
    { bookId: 3, bookName: "The covenant of water", authorName: "Abraham Verghese", bookImage: '', languageTag: 'English', genreTag: 'Non Fiction', price: 349 },
    { bookId: 4, bookName: "Premchandra Sahitya Rachnavli", authorName: "James Baldwin", bookImage: '', languageTag: 'Hindi', genreTag: 'Regional', price: 369 },
  ];

  return (
    <>
      <div className={`container ${active ? "active" : ""}`} ref={wrapperRef}>
        <div className="search-section">
          <div
            className={`search-container ${active ? "active" : ""}`}
            onClick={() => setActive(true)}
          >
            <input
              className={`search-bar ${active ? "active" : ""}`}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="search-button">
            <div className="button-container">
              <img
                className="search-icon"
                src="../src/assets/icons/searchIcon.svg"
                alt="search icon"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SUGGESTION SECTION */}
      <div className={`search-suggestion-main ${active ? "active" : ""}`}>
        <div className={`search-suggestion ${active ? "active" : ""}`} ref={wrapperRef}>
          <div className={`tags-section ${active ? "active" : ""}`}>
            {tags.map((tag) => (
              <div key={tag.tagId} className={`tag ${active ? "active" : ""}`}>
                <img
                  className={`tag-img ${active ? "active" : ""}`}
                  src={`../src/assets/tagIcons/tag0${tag.tagId}.svg`}
                  alt={tag.tagName}
                />
                <p className={`tag-name ${active ? "active" : ""}`}>{tag.tagName}</p>
              </div>
            ))}
          </div>

          <div className={`suggestion-section ${active ? "active" : ""}`}>
            {suggestionSectionCard.map((card) => (
              <div key={card.bookId} className={`suggestion-card ${active ? "active" : ""}`}>
                <div className={`left-section ${active ? 'active': ''}`}>
                    <div
                    className={`image-section ${active ? 'active': ''}`}>
                        <img 
                        className={`book-image_ ${active ? 'active': ''}`}
                        src={card.bookImage} 
                        alt="" />
                    </div>
                    <div
                    className={`description-section ${active ? 'active': ''}`}>
                        <div
                        className={`book-name-section ${active ? 'active': ''}`}>
                            <p
                            className={`book-name ${active ? 'active': ''}`}>
                                {card.bookName}
                            </p>

                        </div>
                        <div
                        className={`author-name-section ${active ? 'active': ''}`}>
                            <p
                            className={`author-name ${active ? 'active': ''}`}>
                                {card.authorName}
                            </p>

                        </div>
                    </div>

                </div>
                <div
                className={`right-section ${active ? 'active': ''}`}>
                    <div
                    className={`suggestion-tags-section ${active ? 'active': ''}`}>
                        <div
                        className={`tag01-section ${active ? 'active': ''}`}>
                            <p
                            className={`tag-01-text ${active ? 'active': ''}`}>
                                {card.languageTag}
                            </p>
                        </div>
                        <div
                        className={`tag02-section ${active ? 'active': ''}`}>
                            <p
                            className={`tag-02-text ${active ? 'active': ''}`}>
                                {card.genreTag}
                            </p>
                        </div>
                    </div>

                    <div
                    className={`price-section ${active ? 'active': ''}`}>
                        <p
                        className='price_'>
                            ₹ {card.price}
                        </p>
                    </div>

                    <div
                    className={`add-to-cart-section ${active ? 'active': ''}`}>
                        <p
                        className={`add-to-cart-text_ ${active ? 'active': ''}`}>
                            Add To Cart
                        </p>
                    </div>

                    <div
                    className={`like-button ${active ? 'active': ''}`}>
                        <div
                        className={`like-button-pad ${active ? 'active': ''}`}>
                            <img 
                            className={`heart-image ${active ? 'active': ''}`}
                            src='../src/assets/icons/heartIcon.svg' 
                            alt="" />

                        </div>

                    </div>


                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
