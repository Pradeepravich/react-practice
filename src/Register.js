import React,{useState} from 'react'
import axios from 'axios';

const Register = () => {

  const [data, setData] = useState({
    username : "",
    email : "",
    password : "",
    conPassword : "",
  })

  const {username, email, password, conPassword} = data ;
  const changeHandler = (e) => {
    setData({...data,[e.target.name]: e.target.value})
  }
  const submitHandler = (e) => {
    e.preventDefault();

    if(password == conPassword){
        console.log(data);

        // axios.post('https://mystart-87c77-default-rtdb.firebaseio.com/register.json',data).then(()=>alert("Submitted successfully"));

        axios.post('https://stackular-d379b-default-rtdb.firebaseio.com/register.json',data).then(()=>alert("Submitted successfully"));

    }else{
        console.log("Password mismatch");
    }

  }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" name ="username" value={username} placeholder="Username" onChange={changeHandler} /><br/>
            <input type="text" name ="email" value={email} placeholder="Email" onChange={changeHandler} /><br/>
            <input type="password" name ="password" value={password} placeholder="Password" onChange={changeHandler} /><br/>
            <input type="password" name ="conPassword" value={conPassword} placeholder="Confirm Password" onChange={changeHandler} /><br/>
            <input className='btn btn-primary mt-2 mb-2' type="submit" value="submit"/>
        </form>
    </div>
  )
}

export default Register