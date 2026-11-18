import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DeleteEmployee, ListEmployees } from '../services/EmployeeService'


export const AllUsers = () => {
    
//     const employees = [
//     {
//       id: 1,
//       firstName: "Kuwaila",
//       lastName: "Jabeen",
//       email: "kuwaila97@gmail.com",
//       phone: "765432190"
//     },
//     {
//       id: 2,
//       firstName: "Rahul",
//       lastName: "Sharma",
//       email: "rahul@gmail.com",
//       phone: "9876543210"
//     }
// ]

const [employees, setEmployees] = useState([])
useEffect(() => {
  ListEmployees().then((response) => {
    setEmployees(response.data)
  })
  .catch((error) => {
    console.error("Error fetching employees:", error)
  })
},[])
  return (
     <>
      <div className="container my-4">
         <Link to="/addUser" className="btn btn-primary my-2 mx-2">Add User</Link>
       <h1 className="text-center my-3">All Users</h1>  
    <table className="table table-striped table-hover border border-dark table-bordered">
        <thead>
          <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>{emp.phoneNumber}</td>
              <td>
                <Link to={`/editUser/${emp.id}`} className="btn btn-sm btn-outline-primary mx-1">Edit</Link>
                <Link to={`/deleteUser/${emp.id}`} className="btn btn-sm btn-outline-danger mx-1" onClick={() => {
                  if (window.confirm("Are you sure you want to delete this user?")) {
                    DeleteEmployee(emp.id).then(() => {
                      // Refresh the employee list after deletion
                      ListEmployees().then((response) => {
                        setEmployees(response.data)
                      })
                    })
                  }
                }}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
  
     </table>
     </div>
     </>
  )
}
