import React,{useState,useEffect} from 'react'

const Cart = () => {
    const [products, setProducts]=useState([])
    useEffect(() =>{
        const cartData=JSON.parse(localStorage.getItem('cartData'))
        setProducts(cartData)
    },[])
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
                            <div className="rov d-flex">
                                <hr />
                                <div className="col-2">
                                    <img src={item.image} alt={item.title} height={200}/>

                                </div>
                                <div className="col-2">
                                    
                                </div>
                                <div className="col-3">
                                    ${item.price}
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