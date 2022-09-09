import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './signup.css'

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password, "signup details")
        window.location.reload()
    }
    return (
        <div className="Auth-form-container">
        <form className="Auth-form" >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
              value={name}  
              onChange={(e)=>{setName(e.target.value)}}            
                type="text"
                className="form-control mt-1"
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
              value={email}  
              onChange={(e)=>{setEmail(e.target.value)}}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
              value={password}  
              onChange={(e)=>{setPassword(e.target.value)}}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}

export default Signup;