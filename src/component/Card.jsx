import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  // console.log(props.data)
  if (!props.data) {
    return null; // or handle the absence of data as per your requirement
}

  return (
    <>
        <div className="col">
            <div className="card">
            <img src={props.data.image} className="card-img-top" alt={props.data.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <h5>{props.data.price} </h5>
                <Link to ={`/productdetails/${props.data.id}`}className='btn btn-warning'> View detial</Link>
              
            </div>
            </div>
        </div>
    </>
  )
}

export default Card