import React, { useEffect, useState } from 'react'
import './AddUser.css'
import { CreateEmployee, GetEmployeeById, UpdateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

export const AddUser = () => {
  const { id } = useParams()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const navigator = useNavigate()

  useEffect(() => {
   if (id == null) return

   GetEmployeeById(id).then((response) => {
     setFirstName(response.data.firstName)
     setLastName(response.data.lastName)
     setEmail(response.data.email)
     setPhone(response.data.phoneNumber)
   }).catch((error) => {
     console.error('Error fetching employee:', error)
   })
  }, [id])

  const handleSubmit = (event) => {
   event.preventDefault()
   const employee = { firstName, lastName, email, phoneNumber: phone }

   const saveEmployee = id == null
     ? CreateEmployee(employee)
     : UpdateEmployee(id, employee)

   saveEmployee.then(() => {
        navigator('/')
     }).catch((error) => {
       console.error(`Error ${id == null ? 'creating' : 'updating'} employee:`, error)
     })
  }

  return (  
   <main className="add-user-page">
      <section className="add-user-card">
        <header className="add-user-header">
          <span className="add-user-icon" aria-hidden="true">+</span>
          <div>
            <h1>{id == null ? 'Add New User' : 'Edit User'}</h1>
            <p>{id == null ? 'Enter the details below to create a user profile.' : 'Update the details below.'}</p>
          </div>
        </header>

        <form className="add-user-form" onSubmit={handleSubmit}>
          <div className="add-user-field">
            <label htmlFor="firstName">First name<span className="text-danger">*</span></label>
            <input
              type="text"
              id="firstName"
              placeholder="e.g. Alex"
              autoComplete="given-name"
              required={true}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="add-user-field">
            <label htmlFor="lastName">Last name<span className="text-danger">*</span></label>
            <input
              type="text"
              id="lastName"
              placeholder="e.g. Morgan"
              autoComplete="family-name"
              required={true}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="add-user-field">
            <label htmlFor="userEmail">Email address<span className="text-danger">*</span></label>
            <input
              type="email"
              id="userEmail"
              placeholder="alex@example.com"
              autoComplete="email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="add-user-field">
            <label htmlFor="userPhone">Phone number<span className="text-danger">*</span></label>
            <input
              type="tel"
              id="userPhone"
              placeholder="(555) 555-5555"
              autoComplete="tel"
              required={true}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

        

          <button type="submit" className="add-user-submit" data-testid="submit-button">
            {id == null ? 'Add User' : 'Update User'}
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </section>
    </main>
  )
}
