function Validation(values){
    let error = {}
    const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,}$/
    // const mobile_pattern = /^(\+91|\+91\-|0)?[9]\d{9}$/
    const mobile_pattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/

    if(values.name === ""){
        error.name = "Name should not be empty"
    }
    if(values.email === ""){
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Invalid Email"
    }
    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Invalid Password"
    }    
    else if(values.confirm_password === "" || values.password !== values.confirm_password){
        error.confirm_password = "Passwords are not matching"
    }
    if(values.mobile_number === ""){
        error.mobile_number = "Mobile Number should not be empty"
    }
    else if(!mobile_pattern.test(values.mobile_number)){
        error.mobile_number = "Invalid Mobile Number"
    }
    
    // console.log(error);
    return error;

}
export default Validation;