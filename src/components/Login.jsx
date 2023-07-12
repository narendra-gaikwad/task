import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateUsername, validatePassword } from "./validation";
import "../components/login.css";
import "../components/common.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const enteredUsername = e.target.elements.username.value;
    const enteredPassword = e.target.elements.password.value;

    if (!validateUsername(enteredUsername)) {
      toast.error("Invalid username");
      return;
    }
    if (!validatePassword(enteredPassword)) {
      toast.error("Invalid password");
      return;
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Login</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              placeholder="Username"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <Link
            to="profile"
            state={{ uname: `${username}` }}
            className="btn-primary"
          >
            Login
          </Link>
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
