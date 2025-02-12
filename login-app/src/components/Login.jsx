/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaGoogle, FaGithub, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 Default is hidden

  return (
    <div className="container">
      <div className="login-box">
        <h2>Welcome back</h2>
        <p>Please Enter your Account Details</p>

        <label>Email</label>
        <input type="email" placeholder="Johndoe@gmail.com" />

        <label>Password</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"} // 👈 Default is "password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <a href="#" className="forgot-password">
          Forgot Password
        </a>

        <button className="sign-in-btn">Sign in</button>

        <div className="social-icons">
          <FaGoogle className="icon" />
          <FaGithub className="icon" />
          <FaFacebook className="icon" />
        </div>

        <a className="create-account" onClick={() => navigate("/signup")}>
          Create an account
        </a>
      </div>

      <div className="info-box">
        <h2>Testimonial.</h2>
        <p>
          “Integer faucibus sem quis nulla tempor posuere. 
          Quisque neque dolor, sagittis vitae est quis, 
          dictum porttitor risus. Donec at gravida nibh. ”
        </p>
        <h4>John Doe</h4>
        <p>sed dignissim felis. Sed et neque nisl.</p>

        <div className="navigation-buttons">
          <button className="prev-btn">←</button>
          <button className="next-btn">→</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
