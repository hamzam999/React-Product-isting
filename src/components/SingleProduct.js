import React from 'react'
import { useParams } from 'react-router-dom'

 

const SingleProduct = ({product}) => {
  const params = useParams();

  return (
      <div className='single-prod-page'>
          {product.filter(e=>e.slug.includes(params.productSlug)).map(ele=>(
             <div key={ele.id} className="prod-card">
              <div className="single-prod-img">
                {ele.images.map(image=>(
                    <img src={image.src} alt=""></img>
                ))}
                
                <h4 className="prod-title">{ele.name}</h4>
                <p className="prod-price">
                  ₹{ele.price}{' '}
                  <strike className="regular-price">
                    {' '}
                    ₹{ele.regular_price}{' '}
                  </strike>
                </p>
              </div>
              </div>
          ))}
         
      </div>
  )
}

export default SingleProduct;