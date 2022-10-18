import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
//  // Supports ESM

// const api = new WooCommerceRestApi({
//   url: 'http://eaudeflower.com', //  store URL
//   consumerKey: 'ck_6bae87e8a712b9f216f642bec5cd7916d6096f2e',
//   consumerSecret: 'cs_268fb3e4acb652503dc26fe41a5e30d7fb2f1001',
//   version: 'wc/v3' // WooCommerce WP REST API version
// });

const uri =
  'https://www.eaudeflower.com/wp-json/wc/v3/products?per_page=12&consumer_key=ck_6bae87e8a712b9f216f642bec5cd7916d6096f2e&consumer_secret=cs_268fb3e4acb652503dc26fe41a5e30d7fb2f1001'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const prod = await axios.get(uri)
    setProducts(prod.data)
  }
  console.log(products)
  return (
    <>
    <span style={{color:"red",marginLeft:"100px"}}>CARD</span>
    
    <div className="App">
      {products.length
        ? products.map((product) => (
            <div key={product.id} className="card">
              <ProductCard prod={product}/>
            </div>
          ))
        : null}
    </div>
    {/* for(let i=1; i<10; i++){
      <button>{i}</button>
    } */}
    </>
    
  )
}

export default App
