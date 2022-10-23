import React from "react";

const ProductCard = (props) => {
    return (
      <div className="prod-card">
        <div className="prod-img">
          <img src={props.prod.images[0].src} alt=""></img>
          <h4 className="prod-title">{props.prod.name}</h4>
          <p className="prod-price">₹{props.prod.price}</p>
        </div>
        

        <a href={props.prod.permalink}>
          <button className="prod-btn">Buy Now</button>
        </a>
      </div>
    )
}



export default ProductCard;