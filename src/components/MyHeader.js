import React from 'react'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import logo from '../logo.svg'


const MyHeader = () => (
  <StickyHeader
    // This is the sticky part of the header.
    header={
      <nav class="nav">
            <div class="nav-container">
                <a href="https://eaudeflower.erhamza.tech"><img className='App-logo' src={logo} alt=""></img></a>
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#testimonial">Testimonial</a></li>
                </ul>
            </div>
        </nav>
    }
  >
  
  </StickyHeader>
);


export default MyHeader;

