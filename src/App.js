import './App.css'
import logo from './logo.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductPage from './components/ProductPage'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
// import ProductCategory from './components/ProductCategory'
import './responsive.css'
import Homepage from './pages/Homepage'

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
  const [allProducts,setAllProducts]=useState([])
 
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
    addProducts(prod.data)
  }

  const fetchCategories = async () => {
    setLoading(true)
    const categ = await axios.get(uri_categ)
    setCategories(categ.data)
    setLoading(false)
  }

  const addProducts=(data)=>{
    if(data.length){
    setAllProducts(allProducts => [...allProducts, data]);
    }
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
    }
  }

  console.log('prod', products)
  console.log('categ', categories)
  console.log('page number', page)
  console.log("all ----------- ",allProducts)


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
      <MyHeader />
      <BrowserRouter>
      <Routes>
     
      <Route path="/" element={<Homepage />}></Route>

      <Route path="/products" element={<ProductPage cat={categories} prod={products}
            nextPage={nextPage}
            prevPage={prevPage}
          />}></Route>

      </Routes>
      
      </BrowserRouter>
      <MyFooter />
    </>
  )
}

export default App
