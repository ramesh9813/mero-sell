import React from 'react'
import {useSelector} from 'react-redux'
const Student = () => {
    const data=useSelector(store=>store.student)
  return (
    <>
    <h2>the name of the student is {data.name}</h2>
    </>
  )
}

export default Student