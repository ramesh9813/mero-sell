import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    const [products, setProducts]=useState([])
    const [unit,setUnit]=useState(0)
    const [price,setPrice]=useState(0)

    // adding the data to the localstorage
    useEffect(() =>{
        const cartData=JSON.parse(localStorage.getItem('cartData'))
        setProducts(cartData ||[])
    },[])

    useEffect(() =>{
        let numberOfProduct=0
        let totalCost=0
        for(let i in products){
            numberOfProduct += products[i].quantity
            totalCost += products[i].quantity*products[i].price
        }
        setUnit(numberOfProduct)
        setPrice(totalCost.toFixed(2))
    },[products])

    
    // adding decrease function to the buttom
    const decrease = (index) => {
       if (products[index].quantity>1){
        const updatedProducts = [...products];
        updatedProducts[index].quantity-=1;
        setProducts(updatedProducts)
        console.log(updatedProducts)
        // actually the cartData and products sync together hence you does not need to update seperately
        localStorage.setItem('cartData', JSON.stringify(updatedProducts));
         } 
    };

    // adding increase function to the buttom
    const increase = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].quantity+=1;
        setProducts(updatedProducts)
        console.log(updatedProducts)    
        localStorage.setItem('cartData', JSON.stringify(updatedProducts));
    };

    //Adding delete functionality in the product List
    const deletes=(index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index,1)
        setProducts(updatedProducts);
        localStorage.setItem('cartData', JSON.stringify(updatedProducts));
    }
  return (
    <>
    <div className="container">
        <div className="row d-flex justify-content-around">
            {products.length===0?
            <h2 className='text-success text-center'> Your Cart is empty</h2>    
            :(
                <>
                <h2 className='text-center'>Your Cart items</h2>
                <div className="col-md-8">
                    {products.map((item,i)=>(
                        <div key={i}>
                              <hr />

                              <div className="container text-left">
                                <div className="row">
                                    <div className="col-3">
                                        {/* The right side of the item  */}
                                    <img className="img-fluids" src={item.image} alt={item.title} height={100}/>
                                    </div>
                                    <div class="col-9">
                                   {/* left side of the item  */}
                                   <div class="container text-left">
                                        <div class="row">
                                            <div class="col">
                                                <h5> {item.title}</h5>
                                            </div>
                                
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                ${item.price}
                                            </div>
                                            <div class="col d-flex">
                                                {/* increase  or decrease the number of product */}
                                                <button className='btn btn-outline-warning'onClick={() => decrease(i)}> <i class="bi bi-dash-circle"></i> </button>
                                                <p className='ms-2 me-2 d-flex align-item-center'> {item.quantity} </p>
                                                <button className='btn btn-outline-warning'onClick={() => increase(i)}><i class="bi bi-plus-circle"></i></button>
                                            </div>
                                            <div class="col">
                                                <button className='btn btn-outline-warning' onClick={()=>deletes(i)}><i class="bi bi-trash"></i></button>
                                            </div>
                                        </div>
                                        </div>

                                    {/* end of the item */}
                                    </div>
                                </div>
                                </div>

                        </div>     
                    ))}
                </div>
                <div className="col-md-3 p-5 h-100 shadow">
                    <h5>Cart summery</h5>
                    <hr />
                    {/* <p><strong>Units:</strong>{products.reduce((a,i)=>(a+parseInt(i.quantity,10)))}</p> */}
                    <p><strong>Units: </strong>{unit}</p>
                    <hr />
                    <p><strong>Total: </strong>${price}</p>
                    <hr />
                    <div > 
                    <Link className='btn btn-warning' to='/checkout' >check out</Link>
                    </div>
                </div>
                </>
            )
        }
        </div>
    </div>
    </>
  )
}

export default Cart