import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './component/Layout'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import ProductDetial from './pages/ProductDetial'
import Cart from './pages/Cart'
const MyRoute = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Homepage/>}/>
              <Route path='products' element={<Product/>}/>
              <Route path='/productdetails/:productId' element={<ProductDetial/>}/>
              <Route path='cart' element={<Cart/>}/>
            </Route>
        </Routes>
    </Router>
    </>
  )
}

export default MyRoute