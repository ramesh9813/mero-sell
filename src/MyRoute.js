import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './component/Layout'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import ProductDetial from './pages/ProductDetial'
const MyRoute = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Homepage/>}/>
              <Route path='products' element={<Product/>}/>
              <Route path='productdetial' element={<ProductDetial/>}/>
            </Route>
        </Routes>
    </Router>
    </>
  )
}

export default MyRoute