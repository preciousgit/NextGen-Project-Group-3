/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import "../styles.css";
import React, { useState } from "react";
import { FaGoogle, FaGithub, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 Default is hidden

  return (
    <div className="container-1">
      <div className="login-box-1">
        <h2>Signup</h2>
        <p>Please Fill In Your Credentials</p>

        <label>First Name</label>
        <input type="text" placeholder="John" />

        <label>Last Name</label>
        <input type="text" placeholder="Doe" />

        <label>Date of Birth</label>
        <input type="date" />

        <label>Email</label>
        <input type="email" placeholder="johndoe@gmail.com" />

        <label>Phone Number</label>
        <input type="tel" placeholder="+(234)123456789" />

        <label>Password</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"} // 👈 Toggle between text & password
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <a href="#" className="forgot-password">
          Forgot Password?
        </a>

        <button className="sign-in-btn">Sign up</button>

        <div className="social-icons">
          <FaGoogle className="icon" />
          <FaGithub className="icon" />
          <FaFacebook className="icon" />
        </div>

        <a className="create-account" onClick={() => navigate("/")}>
          Login
        </a>
      </div>

      <div className="info-box-1">
        <h2>Testimonial.</h2>
        <p>
          “Integer faucibus sem quis nulla tempor posuere. 
          Quisque neque dolor, sagittis vitae est quis, 
          dictum porttitor risus. Donec at gravida nibh.”
        </p>
        <h4>John Doe</h4>
        <p>Sed et neque nisl.</p>

        <div className="navigation-buttons">
          <button className="prev-btn">←</button>
          <button className="next-btn">→</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
