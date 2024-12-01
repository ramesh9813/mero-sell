import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
const StudentForm = () => {
  const [name,setName]=useState('')
  const dispatch=   useDispatch()
const change=()=>{
    dispatch({type:'name',payload:name})
}
    return (
    <>
    <div className="row d-flex justify-content-center">
        <div className="col-5">
            <input type="text" name='name' id='name' className="form-control" onChange={e=>setName(e.target.value)}/>
            <button type="submit" className='btn btn-primary'onClick={change}> Submit</button>
        </div>
    </div>
    </>
  )
}

export default StudentForm