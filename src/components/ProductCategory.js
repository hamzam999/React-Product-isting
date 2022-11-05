import React from 'react'

const ProductCategory = (props) => {
  return (
    <div className="category">
      <h4>
        <i>Product Categories</i>
      </h4>
      {props.cat.length
        ? props.cat.map((category) => (
            <ul key={category.id} className="categ">
              <li>
                {' '}
                {category.name} ({category.count}){' '}
              </li>
            </ul>
          ))
        : null}
    </div>
  )
}

export default ProductCategory
