import React, { useState } from "react";
import './categorySection.css'

export const CategorySection = () => {
    const [ category, setSelectedCategory ] = useState('Fiction')
    
    const categoryItems = [
        {category_: 'Fiction', images:[{img: ''}, {img: ''}, {img: ''}, {img: ''}]},
        {category_: 'Non Fiction', images:[{img: ''}, {img: ''}, {img: ''}, {img: ''}]},
        {category_: 'Romance', images:[{img: ''}, {img: ''}, {img: ''}, {img: ''}]},
        {category_: 'Young Adult', images:[{img: ''}, {img: ''}, {img: ''}, {img: ''}]},
        {category_: 'Featured', images:[{img: ''}, {img: ''}, {img: ''}, {img: ''}]},
        // {category: 'Not set', images:[{img: ''}, {img: ''}, {img: ''}, {img: ''}]}
    ]


    return (
        <div
        className="home-mid-section-category-section"
        >
            {categoryItems.map(cat => (
                <div
                    key={cat.category_}
                    className={`category ${category === cat.category_ ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.category_)}
                >
    
                    <div
                    className="image-wrapper"
                    >
                        {cat.images.map((img) => {
                            <img 
                                key={img.img}
                                src={`../src/assets/bookCoverPages/${img.img}.svg`} 
                                alt={img.img}
                            />
                        })}
                        
                    </div>

                    <div
                    className="mids">
                        <img 
                        className={`checkCircleIcon ${category === cat.category_ ? 'active' : ''}`}
                        src="../src/assets/icons/checkCircleIcon.svg" alt="" />
                        <p
                        className={`mid ${category === cat.category_ ? 'active': ''}`}
                        >
                            {cat.category_}
                        </p>
                        
                        
                    </div>

                    <div
                    className={`title-section ${category === cat.category_ ? 'active' : ''}`}>
                        
                        <p
                        className="title"
                        >
                            {cat.category_}
                        </p>
                    </div>
                </div>
            ))

            }


        </div>
    )
}