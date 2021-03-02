import React, {useState , useEffect} from 'react'
import Form from './../component/Form'
import Product from './Product.js'
import axios from 'axios'

function Inventory(props) {


    const [barang, setBarang] = useState( [{}] )
    // const [trigger, setTrigger] = useState(false)
    // const [barangID, setBarangID] = useState("")


  

    let local = localStorage.getItem("user")
    let localObj = JSON.parse(local)
   
    useEffect(() => {

        axios.get(`https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj[0].id}/barang`)
        .then(response => {
            setBarang([...response.data])
        } )

    }, [])

    return (
        <>
                <div className="container text-center">
                    <div className="row d-flex justify-content-center">
                      <div className=" col-8">
                            <div className="">
                            <Form/>
                            <div class="">
                                    <div>
                                        <div class="list-group mt-4" id="list-tab" role="tablist">
                                            <div className="d-flex bg-aqua flex-column">
                                                { barang.map( (items,index)=>{ return  <Product key={index} name={items.produk} id={items.id} />  } ) }
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

        </>
    )
}

export default Inventory
