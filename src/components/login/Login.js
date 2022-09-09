import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './login.css'

const Login = () => {
  const [username, setUsername] = useState("login");
  const [password, setPassword] = useState("login");
    const handleSubmit = async (e) => {
      e.preventDefault();
      window.location.reload()
      const {username, password} = e.target.elements;
      let details = {
        username: username.value,
        password: password.value,
      };
      console.log(username, password, "login details")
      let response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;",
        },
        body: JSON.stringify(details),
      });
      let result = await response.json();
      alert(result.status);
    };
 
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              onChange={(e) => { setUsername(e.target.value) }}
              value={username}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              onChange={(e) => { setPassword(e.target.value) }}
              value={password}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login;