import React from 'react'
import ProductCategory from '../components/ProductCategory'
import ProductCard from '../components/ProductCard'

const ProductPage = (props) => {
  return (
    <div className="app">
      <div className="prod-page">
        <ProductCard prod={props.prod} />
        <div className="page-button">
          <button onClick={props.prevPage}>PREV</button>
          <button onClick={props.nextPage}>NEXT</button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
