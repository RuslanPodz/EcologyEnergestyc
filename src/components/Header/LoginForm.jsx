
import './LoginForm.css';

import React from "react";
import { FaEye, FaUser } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div className="wrapper">
      <div className="form-box">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaEye className="icon" />
          </div>
          <div className="remember-form">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Dont have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
