import React from 'react'
import ProductCategory from './ProductCategory'

const ProductPage = (props) => {
  return (
    <div className="app">
      <h1>Eaudeflower™</h1>

      <div className="container">
        <ProductCategory cat={props.cat} />

        <div className="prod-page">
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

                    <a href={product.permalink}>
                      <button className="prod-btn">Buy Now</button>
                    </a>
                  </div>
                ))
              : null}
          </div>
          <div className="page-button">
            <button onClick={props.prevPage}>PREV</button>
            <button onClick={props.nextPage}>NEXT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
