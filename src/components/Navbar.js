import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  
    
    
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="d-flex align-items-center">
    <Link to="/">
      <img src="/task-management.png" alt="Logo" width="30" height="30" />
    </Link>
    <h1 className="navbar-brand text-light mb-0 ms-2">User Management System</h1>
    </div>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     </div>
  
</nav>
</>
  )
}
