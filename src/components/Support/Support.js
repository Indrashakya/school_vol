import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


const Support = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(details)
    let response = await fetch("http://localhost:3000/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="Auth-form-container">
      <div className="Auth-form-content">
        <div className='text-center'>
          <h3 className="Auth-form-title">Support</h3>
          <div className="form-group mt-3">

            <form className="Auth-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" required />
              </div>
              <div>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" required />
              </div>
              <div>
                <label htmlFor="message">Message: </label>
                <textarea id="message" required />
              </div>
              <button type="submit">{status}</button>

              <div></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;