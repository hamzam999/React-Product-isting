import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../App.css'
import React from 'react'
import concretePlanter from './concrete-planter.jpeg'
import metalPlanter from './metal-planter.jpg'
import tableVases from './table-vases.jpeg'

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
        <Slider {...settings}>
          <img src={tableVases} alt="table vases" height={500}></img>
          <img src={metalPlanter} alt="metal planter" height={500}></img>
          <img src={concretePlanter} alt="concrete planter" height={500}></img>
        </Slider>
      </div>
    </>
  )
}
export default ImageSlider
