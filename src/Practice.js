import React from 'react'
import {useNavigate} from 'react-router-dom'

const Practice = () => {

  const navigate = useNavigate();

  return (
    <div>
      <center>
          <h1>UseHistory method is deprecated and it is replaced by useNavigate</h1>
          <button className='btn btn-secondary' onClick={()=>navigate('/dashboard')} >Click</button>
      </center>
    </div>
  )
}

export default Practice