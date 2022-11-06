import React from 'react'
import 'react-sticky-header/styles.css'
import StickyHeader from 'react-sticky-header'
import logo from '../eaudeflower_logo_final.png'

const MyHeader = () => (
  <div className="app-header">
    <StickyHeader
      // This is the sticky part of the header.
      header={
        <nav class="nav">
          <div class="nav-container">
            <a href="/">
              <img className="logo" src={logo} alt=""></img>
            </a>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
            </ul>
          </div>
        </nav>
      }
    ></StickyHeader>
  </div>
)

export default MyHeader
