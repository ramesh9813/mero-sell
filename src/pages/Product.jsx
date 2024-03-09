import React,{useState,useEffect} from 'react'
import Card from '../component/Card'
import axios  from 'axios'

const Product = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(res=>{
           console.log(res)
            setProducts(res.data);
        })
        .catch(error=>console.log(error))
    },[])
    console.log(products)
  return (
    <>
    <div className="container-fluid d-flex">
        <div className="row row-cols-1 row-cols-md-4 g-4">
           {products.map((item,i)=>(
            <Card data={item} key={i}/>
           ))}
        </div>
        <div className="filter my-2 mb-2 fs-4 text-end">
          <i class="bi bi-filter"></i>
        </div>
        </div>
    </>
  )
}

export default Product