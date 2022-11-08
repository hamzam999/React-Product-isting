import './App.css'
import './responsive.css'
import logo from './logo.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import Homepage from './pages/Homepage'
import ProductPage from './pages/ProductPage'
import SingleProduct from './components/SingleProduct'
import NotFound from './pages/NotFound'

// import ProductCategory from './components/ProductCategory'

const images = [
  {
    id: 1,
    src:
      'https://images.unsplash.com/photo-1547517023-7ca0c162f816?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'concrete Planter',
  },
  {
    id: 2,
    src: '/Slider/concrete-planter.png',
    alt: 'Image 2 ',
  },
  {
    id: 3,
    src: '{planter}',
    alt: 'Image 3',
  },
]

// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
//  // Supports ESM

// const api = new WooCommerceRestApi({
//   url: 'http://eaudeflower.com', //  store URL
//   consumerKey: 'ck_6bae87e8a712b9f216f642bec5cd7916d6096f2e',
//   consumerSecret: 'cs_268fb3e4acb652503dc26fe41a5e30d7fb2f1001',
//   version: 'wc/v3' // WooCommerce WP REST API version
// });

var page = 1
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
        <Route path="/" element={<Homepage images={images} />}></Route>
        <Route
            path="/products"
            element={
              <ProductPage
                prod={products}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            }
          ></Route>
          <Route
            path="/products/:productSlug"
            element={<SingleProduct product={products} />}
          ></Route>
           <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <MyFooter />
    </>
  )
}

export default App
