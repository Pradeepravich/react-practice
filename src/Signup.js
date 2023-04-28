import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Validation from './Validation';


const Signup = () => {

    const [values, setValues] = useState({
        name : "",
        email : "",
        password : "",
        confirm_password : "",
        mobile_number:""
    })

    const {name, email, password, confirm_password, mobile_number} = values ;

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setValues({...values,[e.target.name]: e.target.value})
        setErrors(Validation(values))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(Object.keys(values));
        const errorObject = Validation(values);
        setErrors(errorObject)
        // console.log(Object.keys(errorObject).length);
        if(Object.keys(errorObject).length == 0){

            // let formData = new FormData();
            // formData.append("email", email);
            // React.useEffect(() => {
            //     axios.get("https://stackular-d379b-default-rtdb.firebaseio.com").then((response) => {
            //       setPost(response.data);
            //     });
            //   }, []);    

            axios.post('https://stackular-d379b-default-rtdb.firebaseio.com/register.json',values).then(()=>alert("Submitted successfully"));
        }
        
    }    

    return (
        <div className='signup_container w-100 d-flex justify-content-center'>
            <div className='signup_form w-50 mt-5'>
                <h1 className='text-center mb-3'>Signup</h1>
                <div className='form m-2'>
                    <form className='border p-4' onSubmit={submitHandler}>
                        <label className='fw-bolder'>Name</label>
                        <input type="text" name="name" placeholder='Enter Name' className='form-control mb-3 rounded-0' onChange={changeHandler} />
                        {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                        <label className='fw-bolder'>Email</label>
                        <input type="text" name="email" placeholder="Enter Email" className='form-control mb-3 rounded-0' onChange={changeHandler} />
                        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                        <label className='fw-bolder'>Password</label>
                        <input type="password" name="password" placeholder="Enter Password" className='form-control mb-3 rounded-0' onChange={changeHandler} />
                        {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                        <label className='fw-bolder'>Confirm Password</label>
                        <input type="password" name="confirm_password" placeholder="Re-enter Password" className='form-control mb-3 rounded-0' onChange={changeHandler} />
                        {errors.confirm_password && <p style={{color:"red"}}>{errors.confirm_password}</p>}
                        <label className='fw-bolder'>Mobile Number</label>
                        <input type="text" name="mobile_number" placeholder='Enter Mobile Number' className='form-control mb-3 rounded-0' onChange={changeHandler} />
                        {errors.mobile_number && <p style={{color:"red"}}>{errors.mobile_number}</p>}
                        <div className='mt-4'>
                            <input type='button' className='btn btn-danger w-50 rounded-0' value="Cancel"/>
                            <input type='submit' className='btn btn-success w-50 rounded-0' value="Signup"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup