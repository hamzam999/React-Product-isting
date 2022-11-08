import React from 'react'
import { useParams,  useNavigate } from 'react-router-dom'
import '../App.css'
 

const SingleProduct = ({product}) => {
  const params = useParams();
  let navigate=useNavigate()
  
  return (
      <div className='single-prod-page'>
          {product.filter(e=>e.slug.includes(params.productSlug)).map(ele=>(
             <div key={ele.id} className="single-prod-card">
              <div className="single-prod-img">
           
                {ele.images.map(image=>(
                   
                    <img key={image.id} src={image.src} alt="" height={500}></img>
            
                ))}  
                 </div>
                 <div className='single-prod-details'>
                <h4 className="single-prod-title">{ele.name}</h4>
                <p><strong>Categories: </strong>{ele.categories.map(category=>(
                        <i key={category.id}>{' '}{category.name},</i>
                       ))}</p>
                <p className="prod-price">Offer Price:  {' '}
                <strike className="regular-price">
                    {' '}
                    ₹{ele.regular_price}{' '}
                  </strike> ₹{ele.price}
                       </p>
                       <p className='single-prod-desc'>{ele.description}</p>
                    </div>
                   
              </div>
          ))}
          <div className="page-button" >
          <button onClick={() => navigate(-1)}>Go Back</button></div>
      </div>
  )
}

export default SingleProduct;