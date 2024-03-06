import React,{useState,useEffect} from 'react'
import Card from '../component/Card'
import axios  from 'axios'

const Product = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(res=>{
            setProducts(res.data);
        })
        .catch(error=>console.log(error))
    },[])
  return (
    <>
    <div classNameName="container-fluid">
        <div className="row row-cols-1 row-cols-md-4 g-4">
           {products.map(item=>(
            <Card data={item}/>
           ))}
        </div>
        </div>
    </>
  )
}

export default Product