import React from 'react'
import { useLocation } from 'react-router-dom'
function Interface() {
    let {state}=useLocation()

    
  return (
    <div>
        <h1 className='text-end fs-2 text-primary'>Welcome {state.username}</h1>
        <p className='text-end fs-1 text-success'>Email:{state.email}</p>
        
        </div>
  )
}

export default Interface