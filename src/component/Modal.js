import React from 'react'
import axios from 'axios'

function Modal(props) {

    let local = localStorage.getItem("user")
    let localObj = JSON.parse(local)
    let val = ""

    function handleChange (param){
        val = param.target.value
        
     }


    function handleUpdate (param) {
        alert(val)
    }

     function handleUpdate (param){


        console.log("id user " ,localObj[0].id)
        console.log("ini val inputan user " ,val)
        console.log("ini id barang " +props.barangID)
        
        
      
       // axios.put(`https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj[0].id}/barang/${param}` , {produk : val})
        // axios.get(`https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj[0].id}/barang/${param}`)
        

        // .then(result => console.log("Data diubah " ,result.data))
        
     }



    return (
        <div>


{/* <button type="button" class="btn btn-primary" >
  Launch demo modal
</button> */}



        <div class="modal fade" id = {"exampleModal-"+props.nomor} tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Changing to</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control"  aria-label="Username" onChange={handleChange} />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" onClick={handleUpdate} > Update </button>
                </div>
                </div>
            </div>
        </div>




            
        </div>
    )
}

export default Modal
