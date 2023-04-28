import React from 'react'
import {useParams} from 'react-router-dom'

const Dashboard = () => {
  const {name} = useParams();
  return (
    <div>This is Dashboard Page:{name}</div>
  )
}

export default Dashboard