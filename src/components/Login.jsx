import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/login.css";
import "../components/common.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    // If login is successful, redirect to the profile page
    navigate("/profile");
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Login</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input type="text" id="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/register">register</Link>
        </p>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Login;
