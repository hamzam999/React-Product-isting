import React from 'react'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import logo from '../logo.svg'

// // const nav = document.querySelector('.nav')
// // window.addEventListener('scroll',fixNav)

// // function fixNav() {
// //     if(window.scrollY > nav.offsetHeight + 150){
// //         nav.classList.add('active')
// //     }
// //     else{
// //             nav.classList.remove('active')
// //     }
// // }


// const stickyHeader = () => {
//   return (
//     <>
//       <nav class="nav">
//         <div class="container">
//           <a href="#">
//             <img src="../logo.svg" alt=""></img>
//           </a>
//           <ul>
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Product</a>
//             </li>
//             <li>
//               <a href="#">Testimonial</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default stickyHeader


const MyHeader = () => (
  <StickyHeader
    // This is the sticky part of the header.
    header={
      <nav class="nav">
            <div class="nav-container">
                <a href="#"><img className='App-logo' src={logo} alt=""></img></a>
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

