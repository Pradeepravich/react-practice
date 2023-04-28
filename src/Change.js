import React, {useState} from 'react'

const Change = () => {
  const [user, setUser] = useState("");

  const handler = (e)=>{
        setUser(e.target.value);
  }

  return (
    <div>
        <input type="text" name="user" value={user}  placeholder="Username"  onChange={handler}/><br/>
        <p>Result: {user}</p>
    </div>
  )
}

export default Change