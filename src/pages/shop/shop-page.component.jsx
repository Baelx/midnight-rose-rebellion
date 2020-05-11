import React from 'react'
import CategoryPreview from '../../components/category-preview/category-preview.component'

import EXAMPLE_SHOP_DATA from './shop-data'

class ShopPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: EXAMPLE_SHOP_DATA
        }
    }


    render() {
        const {categories} = this.state;
        return (
            <div className="shop-page">
                {
                    categories.map(({id, ...categoryProps}) => 
                        <CategoryPreview key={id} {...categoryProps}/>
                    )
                }
            </div>
        )
    }
}

export default ShopPage