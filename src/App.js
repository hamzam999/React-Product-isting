import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'

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
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    setLoading(true);
    const prod = await axios.get(uri)
    setProducts(prod.data)
    setLoading(false)
  }
  // console.log(products)
  if (loading) {
    return <h1 className='loading'>Loading....</h1>
  }

  return (
    <>
      <div className='app-header'>
        <MyHeader />
      </div>
      <div className="container">
      <h1>Eaudeflower™</h1>
        <div className="prod-grid">
          {products.length
            ? products.map((product) => (
                <div key={product.id} className="card">
                  <ProductCard prod={product} />
                </div>
              ))
            : null}
        </div>
      </div>

      <MyFooter />
    </>
  )
}

export default App
