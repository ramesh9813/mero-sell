import React,{useState,useEffect} from 'react'

const Cart = () => {
    const [products, setProducts]=useState([])
    let [count,setCount]=useState([1])
    useEffect(() =>{
        const cartData=JSON.parse(localStorage.getItem('cartData'))
        setProducts(cartData)
    },[])
    const decrease=()=>{
        setCount(count-=1)
        
    }
    const increase=()=>{
        setCount(count+=1)
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
                                                <button className='btn btn-outline-warning'onClick={decrease}> <i class="bi bi-dash-circle"></i> </button>
                                                <p className='ms-2 me-2 d-flex align-item-center'> {count} </p>
                                                <button className='btn btn-outline-warning'onClick={increase}><i class="bi bi-plus-circle"></i></button>
                                            </div>
                                            <div class="col">
                                                <button className='btn btn-outline-warning'><i class="bi bi-trash"></i></button>
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
                <div className="col-md-3 p-2 shadow">
                    <h5>Cart summery</h5>
                    <hr />
                    <p><strong>Units: </strong>5</p>
                    <hr />
                    <p><strong>Total:</strong>$230</p>
                    <hr />
                    <div > 
                    <button className='btn btn-warning'>check out</button>
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