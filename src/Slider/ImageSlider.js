import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../App.css'
import React from 'react'
import concretePlanter from './concrete-planter.jpeg'
import metalPlanter from './metal-planter.jpg'
import tableVases from './table-vases.jpeg'
import { Link } from 'react-router-dom'

const ImageSlider = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  return (
    <>
      <div className="imgslider">
        <Link to={'/products'}>
          {' '}
          <Slider {...settings}>
            <img src={tableVases} alt="table vases"></img>
            <img src={metalPlanter} alt="metal planter"></img>
            <img src={concretePlanter} alt="concrete planter"></img>
          </Slider>
        </Link>
      </div>
    </>
  )
}
export default ImageSlider
