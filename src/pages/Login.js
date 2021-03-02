import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';



function Login() {

    const history = useHistory();
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)





    useEffect (() => { 

        if (localStorage.user){

            alert ("You Already Logged In")
            history.push("/dashboard")

        }

     })
    

    let dataObj = {
        email: email,
        password:  password,
    }

    function getEmail (param) {
        setEmail (param.target.value)
    }

    function getPassword (param) {
        setPassword (param.target.value)
    }

    function getData (){

        axios.get("https://6023a8436bf3e6001766b514.mockapi.io/login-app")

            .then(result => {

                // Validasi User
                const user = result.data.filter( (user) => user.email === dataObj.email && user.password === dataObj.password );
                let userJSON = JSON.stringify(user)

                if ( user.length > 0 ){
                        alert ("Login Berhasil")
                        localStorage.user = userJSON
                        history.push("/")           
                    } else {
                        alert ("Login Gagal")
                    }
    
        } )

    }


    return (
        <>
        { !localStorage.user ? 
            <div className="login">
  
                    <h1 className="text-center mb-1 mt-5 fw-light display-4">Login</h1>
                    <div className="container p-5">
                            <div className="row d-flex justify-content-md-center">
                                <div className="col-md-4">  
                                    <form className="p-3 border border-3">
                                    <label for="exampleFormControlInput1" className="form-label" >Your Email</label>
                                    <input type="email" className="form-control" id="registerEmailForm" onChange={getEmail}/>
                                    <label for="exampleFormControlInput1" className="form-label" >Password</label>
                                    <input type="password" className="form-control" id="registerPasswordForm" onChange={getPassword}/>
                                    <button type="button" className="btn btn-dark mt-3 col-12" id="loginButton" onClick={getData}>Submit</button>
                                    </form>
                                </div>
                            </div>
                    </div>
            </div>
           
            : <div> </div>
        }    

        </>
        
    )
    
}

export default Login
