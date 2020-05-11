import React from 'react'

import './category-preview.styles.scss'

const CategoryPreview = ({title, items}) => {
    return (
        <div className="category-preview">
            <h2 className="title">{title}</h2>
            <div className="preview">
                {
                    items
                        .filter((item, index) => index < 4)
                        .map(product => 
                        <div key={product.id}>{product.name}</div>
                    )
                }
            </div>
        </div>
    )
}

export default CategoryPreview;