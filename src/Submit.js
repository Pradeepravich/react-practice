import React,{useState} from 'react'

const Submit = () => {

  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");

  const [data, setData] = useState({
    username : "",
    password : ""
  });

  const {username,password} = data;

  const changeHandler = (e)=>{
     setData({...data, [e.target.name]:[e.target.value]});
  }
  const submitHandler =(e)=>{
    e.preventDefault();
  }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" name ="username" value={username} placeholder="Username" onChange={changeHandler} /><br/>
            <input type="password" name ="password" value={password} placeholder="Password" onChange={changeHandler} /><br/>
            <input type="submit" value="submit"/>
        </form>

    </div>
  )
}

export default Submit