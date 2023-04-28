import React,{useState} from 'react'
import {Button} from 'react-bootstrap';

const Counter = () => {

  const [counter, setCounter] = useState(0);
  const [initialCounter, setInitialCounter] = useState(0);

  const handleReset = ()=>{
    setCounter(initialCounter);
  }

  return (
    <div>
        <Button onClick={()=>setCounter(counter+1)}>Increment</Button>&nbsp;
        <Button onClick={()=>setCounter(counter-1)}>Decrement</Button>&nbsp;
        <input type="button" className='btn btn-secondary' onClick={handleReset} value="Reset"/>
        <p>Count: {counter}</p>
    </div>
  )
}

export default Counter