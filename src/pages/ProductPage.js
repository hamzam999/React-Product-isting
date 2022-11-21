import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductPage = (props) => {
  return (
    <div className="app">
      <div className="prod-page">
        <h2>Our products</h2>

        <ProductCard prod={props.prod} />
        <div className="page-button">
          <button onClick={props.prevPage} disabled={props.page === 1}>
            PREV
          </button>
          <button onClick={props.nextPage} disabled={props.page === 11}>
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
