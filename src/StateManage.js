import React, {useState} from 'react'

const StateManage = () => {

  const [name, setName] = useState("Skillhub");
  const [increment,setIncrement] = useState(0);
  const [decrement,setDecrement] = useState(10);
  return (
    <div>
        <h1>{name}</h1>
        <button onClick ={()=> setName("Telugu Skillhub")}>Change</button>
        <h1>{increment}</h1>
        <button onClick={()=> setIncrement(increment+1)}>Increase</button>
        <h1>{decrement}</h1>
        <button onClick={()=> setDecrement(decrement-1)}>Decrease</button>
    </div>
  )
}

export default StateManage