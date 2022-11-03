import './App.css'
import logo from './logo.svg'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import ProductCategory from './components/ProductCategory'

// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
//  // Supports ESM

// const api = new WooCommerceRestApi({
//   url: 'http://eaudeflower.com', //  store URL
//   consumerKey: 'ck_6bae87e8a712b9f216f642bec5cd7916d6096f2e',
//   consumerSecret: 'cs_268fb3e4acb652503dc26fe41a5e30d7fb2f1001',
//   version: 'wc/v3' // WooCommerce WP REST API version
// });
var page=1;
// const uri_prod = `https://www.eaudeflower.com/wp-json/wc/v3/products?per_page=12&page=${page}consumer_key=ck_6bae87e8a712b9f216f642bec5cd7916d6096f2e&consumer_secret=cs_268fb3e4acb652503dc26fe41a5e30d7fb2f1001`
const uri_categ = `https://www.eaudeflower.com/wp-json/wc/v3/products/categories?per_page=15&consumer_key=ck_6bae87e8a712b9f216f642bec5cd7916d6096f2e&consumer_secret=cs_268fb3e4acb652503dc26fe41a5e30d7fb2f1001`

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
 
  const [button, setButton] = useState(true)

  useEffect(() => {
    fetchProducts()
    fetchCategories()
  }, [])

  const fetchProducts = async () => {
    setLoading(true)
    const prod = await axios.get(
      `https://www.eaudeflower.com/wp-json/wc/v3/products?per_page=12&page=${page}&consumer_key=ck_6bae87e8a712b9f216f642bec5cd7916d6096f2e&consumer_secret=cs_268fb3e4acb652503dc26fe41a5e30d7fb2f1001`
    )
    setProducts(prod.data)
    setLoading(false)
  }

  const fetchCategories = async () => {
    setLoading(true)
    const categ = await axios.get(uri_categ)
    setCategories(categ.data)
    setLoading(false)
  }

  const nextPage = () => {
    page = page + 1
    fetchProducts()
  }
  const prevPage = () => {
    if (page > 1) {
      page = page - 1
      fetchProducts()
    } else {
      setButton(false)
    }
  }

  console.log('prod', products)
  console.log('categ', categories)
  console.log('page number', page)

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading....</h1>
        <img className="App-logo" src={logo} alt=""></img>
      </div>
    )
  }

  return (
    <>
      <div className="app-header">
        <MyHeader />
      </div>
      <div className="app">
        <h1>Eaudeflower™</h1>
        <div className="container">
          <div className="category">
            {' '}
            <ProductCategory cat={categories} />
          </div>

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
        <div className="page-button">
          <button className="prod-btn" onClick={prevPage}>
            PREV
          </button>
          <button className="prod-btn" onClick={nextPage}>
            NEXT
          </button>
        </div>
      </div>
      <MyFooter />
    </>
  )
}

export default App
