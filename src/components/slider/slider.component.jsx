import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

export const Slider = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/e35/90410983_3563073877100658_8147598683169670211_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=kG8WuuqjmqEAX8A09Og&oh=8174b78a352794b8dd81557848907bc2&oe=5EE2244F"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/91344266_637842667050145_1643759284599263704_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=A2kVeHWlMw8AX8_yFsZ&oh=6378f2b5f9b4e189b0f7dffb837bf040&oe=5EE0AEE6"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/89357662_531909684101469_2685876057609651176_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=b4Ca2Q5ShB4AX86m6Wc&oh=d2d837223e44e0a0274b60dae455dadf&oe=5EE261D3"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}