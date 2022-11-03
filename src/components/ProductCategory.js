import React from 'react'

const ProductCategory = (props) => {
  return (
    <>
    <h4><i>Product Categories</i></h4>
    {props.cat.length ? props.cat.map((category)=>(
        <ul key={category.id} className="categ">
        <li> {category.name} ({category.count}) </li>
        </ul>
      )):null}
      </>
  )
}

export default ProductCategory
