import React, { Props } from 'react'

import { Slider }  from '../../components/slider/slider.component'
import Collage from '../../components/collage/collage.component'

import './home-page.styles.scss'

export const HomePage = () => {
    return (
    <div className="home-page">
        <Slider />
        <Collage />
    </div>
    )
}