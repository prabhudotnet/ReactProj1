import React, { useState } from 'react';
import './SimpleForm.css';

function SimpleForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    mobile: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can handle form submission here (e.g., send to backend)
  };


  return (
    <div>
      {/* <div className="simple-form-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit} className="simple-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            maxLength={10}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {submitted && (
        <div className="success-message">
          <p>Registration successful!</p>
          <p>
            <strong>Username:</strong> {form.username}<br />
            <strong>Email:</strong>{form.email}<br />
            <strong>Mobile:</strong> {form.mobile}
          </p>
        </div>
      )}
    </div>
*/}
   
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6 form-container mt-2">
      <form>
        <h2>Registration Form</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">User Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1"  aria-describedby="exampleInputEmail1-help"   />
          </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
         <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Mobile</label>
          <input type='Number' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Conform Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class='container d-flex justify-content-center'>
          <div class="row">
          <div class='col'> <button type="submit" class="form-control btn btn-success">Submit</button></div>
          <div class='col'> <button type="submit" class="form-control btn btn-danger">Clear</button></div>
          </div>

        </div>
       
      </form>
    </div>
    <div class="col-md-6 image-container">
      {/* Content for the image side, like a logo or a background image */}
    </div>
  </div>
</div>

    </div>
    );
}

export default SimpleForm;