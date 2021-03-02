import React from 'react'
import { useHistory } from 'react-router-dom'

function LogoutButton() {

    const history = useHistory();
    
    function logout  ()  {
       
        let n = window.confirm("Logging out, Are you sure?")
        if (n){ 
            localStorage.clear("user")
            history.push("/")
         } else return
      }


    return (
        <div>
            <button type="button" class="btn btn-dark btn-sm" onClick={logout}>Log out</button>
        </div>
    )
}

export default LogoutButton
