import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <div className="prod-grid">
      {props.prod.length
        ? props.prod.map((product) => (
            <div key={product.id} className="prod-card">
              <div className="prod-img">
                <img src={product.images[0].src} alt=""></img>
                <h4 className="prod-title">{product.name}</h4>
                <p className="prod-price">
                  ₹{product.price}{' '}
                  <strike className="regular-price">
                    {' '}
                    ₹{product.regular_price}{' '}
                  </strike>
                </p>
              </div>
              <Link to={`/products/${product.slug}`}>
                <button className="prod-btn">Buy Now</button>
              </Link>
            </div>
          ))
        : null}
    </div>
  )
}

export default ProductCard
