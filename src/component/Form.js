import React, {useEffect} from 'react'
import axios from 'axios'

function Form(props) {

    let local = localStorage.getItem("user")
    let localObj = JSON.parse(local)
    

    let val = ""

    function handleChange (param){
       val = param.target.value
    }

    function handlePost (){
        axios.post(`https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj[0].id}/barang` , {produk : val}  )
        .then(result => console.log(result.data) )
        .catch(err => console.log(err))

        
    }

    return (
        <>
            
            <div className="input-group">
                <input className="form-control border border-2" placeholder="Input your items..." id="inputGroupFile04"  onChange={handleChange} />
                <button className="btn  btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={handlePost}>Enter</button>
            </div>


        </>
    )
}

export default Form
