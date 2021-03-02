import React from 'react'
import { Link } from "react-router-dom";



function Navbar() {
    return (
        <>
        
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to = "/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/register" className="nav-link">Register</Link>
        </li>
        <li className="nav-item">
        <Link to = "/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
        <Link to = "/dashboard" className="nav-link">Dashboard</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>
    )
}

export default Navbar



// <Link to = "/" className="nav-link text-light">Home</Link>
// <Link to="/Register" className="nav-link text-light">Register</Link>
// <Link to = "/Login" className="nav-link text-light">Login</Link>
// <Link to = "/Profile" className="nav-link text-light">Profile</Link>
// <Link to = "/Gallery" className="nav-link text-light">Gallery</Link> 