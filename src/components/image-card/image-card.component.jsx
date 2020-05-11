import React from 'react'
import styled from 'styled-components'

import { withRouter } from 'react-router-dom'


import './image-card.styles.scss'

const ImageCard = ({id, title, imageUrl, size, linkUrl, match, history}) => {

    const CardBody = styled.div`
        background-image: url(${imageUrl});
        min-width: 30%;
        height: 240px;
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        margin: 0 7.5px 15px;

        ${({ size }) => size && `height: 380px;`}
    `;

    console.log(match, linkUrl)


    return (
        <CardBody onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="content">
                <h2 className="title">{title}</h2>
                <span className="subtitle">Shop now</span>
            </div>
        </CardBody>
    )
}

export default withRouter(ImageCard)