import React,{useEffect, useState} from 'react'

const Fetch = () => {

  const[data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then(response=>response.json()).then(json=>setData(json))
  },[])

  return (
    <div>
      {data.map(value => <li key={value.id} >{value.title}</li>)}
    </div>
  )
}

export default Fetch