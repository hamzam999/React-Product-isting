import React from 'react'
import ImageSlider from '../Slider/ImageSlider'

const Homepage = (props) => {
  return (
    <div className="homepage">
      {/* <img src={props.imgs[0]}></img> */}
      <ImageSlider images={props.images}/>
        {/* <productCard */}
    </div>
  )
}

export default Homepage
