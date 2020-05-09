import React, { Props } from 'react'

import { Slider }  from '../../components/slider/slider.component'
import  ImageCard  from '../../components/image-card/image-card.component'

import './home-page.styles.scss'

export const HomePage = () => {
    return (
    <div className="homepage">
        <Slider />
        <div className="directory-menu">
            <ImageCard title='Test' imageUrl='https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/94219644_102596088063176_3873659549203300982_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=pKjC3nWH38IAX_T2CLc&oh=4d72764d666c2b192bc4735681597da3&oe=5EE10E3C' />
        </div>
    </div>
    )
}