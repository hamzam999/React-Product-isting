import React from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from '../Slider/ImageSlider'

const Homepage = (props) => {
  return (
    <div className="homepage">
      <h1>
        <strong>
          <i>Welcome to eaudeflower™ </i>
         
        </strong>
             </h1>
      <cite>Creating home vibes graceful</cite>
      <ImageSlider />
      <br></br>
      <h3>
        Eaudeflower™ started as a company to sell artificial scented flower bouquets whose smell lasts more than a week in a closed room.
        The idea was to have a gift that can be used to enhance the ambience of the room or where ever its kept.

        Keeping our goal to create home vibes graceful we expanded our products to all kinds of planters, utility holders, eco-friendly paper bags, etc.
      </h3>
      <div className="page-button" >
        <Link to={'/products'}><button>View Our Products</button></Link>
      </div>
    </div>
  ) 
}

export default Homepage
