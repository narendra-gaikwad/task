import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/register.css";
import "../components/common.css";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccess(true);
    toast.success("Registration successful!");
    setSuccess(false); // Reset success state to false
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Register</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <div className="profile-photo-container">
              <input type="file" id="profilePhoto" accept="image/*" />
              <div className="profile-photo-preview"></div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input type="text" id="username" placeholder="Username" required />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" onClick={handleSignIn}>
            Login
          </Link>
        </p>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Register;
