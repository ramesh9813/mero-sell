import React,{useContext} from 'react'
import { global } from './GlobalContext'

const ComD = () => {
  const data=useContext(global)
  return (
    <>
    <h2>this is d component</h2>
    <p> the data imported from the context {data.fname}</p>
    <p> the data imported from the context {data.age}</p>
    </>
  )
}

export default ComD