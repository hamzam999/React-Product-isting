import React from "react";

const ProductCard = (props) => {
    return(
    <div className="prod-card">
        <div className="prod-img">
            <img src={props.prod.images[0].src} alt=""></img>
            <p className="prod-price">
            INR {props.prod.price}/-
        </p>
            {/* <img src={props.prod.image} alt=""> */}

            {/* </img> */}
        </div>
        <h2 className="prod-title">{props.prod.name}</h2>
       
       
        <a href={props.prod.permalink}><button className="prod-btn">Buy Now</button></a>
    </div>)
}



export default ProductCard;