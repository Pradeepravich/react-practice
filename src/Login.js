import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
        username : "",
        password : ""
      });

      const {username,password} = data;

      const [auth, setAuth] = useState(false);

      const changeHandler = (e)=>{
         setData({...data, [e.target.name]:e.target.value});
      }
      const submitHandler =(e)=>{
        e.preventDefault();
        console.log(data);
        setAuth(true)
      }

      const navigate = useNavigate();

      if(auth){
        navigate('/about');
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

export default Login