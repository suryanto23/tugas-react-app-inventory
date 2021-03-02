import React from 'react'
import axios from 'axios'
import { Prompt } from 'react-router-dom'

function product(props) {


    let local = localStorage.getItem("user")
    let localObj = JSON.parse(local)

    function deleteData (param){
        
        axios.delete(`https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj[0].id}/barang/${param}`)
        .then(result => console.log("Data Terhapus " ,result.data))
       
    }


    function updateData () {
        console.log("id user " +localObj[0].id)
        console.log("id barang " +props.id)

        let val = prompt("Update data")

        if(prompt){
            
            axios.put(`https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj[0].id}/barang/${props.id}` , {produk : val})
            .then(result => console.log(result.data))

        }
        
    }

    return (
        <div className="d-flex mb-1">
            
            <button type="button" className="btn btn-outline-secondary rounded-0" onClick={updateData} >Update</button>
                <a className="list-group-item list-group-item-action " >{props.name}</a>
            <button type="button" className="btn btn-outline-secondary rounded-0" onClick={()=> deleteData(props.id) }>Delete</button>

        </div>
    )
}

export default product

