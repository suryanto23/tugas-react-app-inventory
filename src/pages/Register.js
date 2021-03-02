
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';





function Register() {

    
    const [nama, setNama] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const history = useHistory();

    let dataObj = {
        name:  nama,
        email: email,
        password: password,
    }

    function storeNama (param){
        setNama (param.target.value)
    }

    function storeEmail (param){
        setEmail (param.target.value)
        
    }

    function storePassword (param){
        setPassword (param.target.value)
    }


    function sendData (){

        axios.post("https://6023a8436bf3e6001766b514.mockapi.io/login-app", dataObj )
        .then(result => {  
            console.log("POST executed sucssesfully : " , result.data)
            alert ("Registrasi Berhasil, Silahkan Login")
            history.push("/Login") 
        } )

     }

    return (
        <div className="register">
        
        {/* <h1 className="registerTitle">Register</h1>
        <div className="container">

            <p>Nama</p>
            <input onChange={storeNama} />
            <p>Email</p>
            <input  onChange={storeEmail} />
            <p>Password</p>
            <input type="password" onChange={storePassword}/>
            <p>Biodata</p>
            <textarea  onChange={storeBiodata}/> 
            <button  onClick={sendData} >Submit</button>


        </div> */}

<h1 className="text-center mb-1 mt-5 fw-light display-4">Registration</h1>



<div className="container p-5">

  <div className="row d-flex justify-content-md-center">

      <div className="col-md-4">  

          <form className="p-3 border border-3">
            <label for="exampleFormControlInput1" className="form-label" >Your Name</label>
            <input type="" className="form-control" id="registerNameForm" onChange={storeNama}/>
            <label for="exampleFormControlInput1" className="form-label" >Your Email</label>
            <input type="email" className="form-control" id="registerEmailForm" onChange={storeEmail}/>
            <label for="exampleFormControlInput1" className="form-label">Password</label>
            <input type="password" className="form-control" id="registerPasswordForm"  onChange={storePassword}/>
            <button type="button" className="btn btn-dark mt-3 col-12" id="loginButton" onClick={sendData}>Submit</button>
          </form>

          

      </div>

   </div>

 </div>


       

        </div>
    )
}

export default Register
