import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const { changeStatus } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  /* OnChange Handler */
  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  /* OnSubmit Handler */
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    changeStatus(true);
    navigate("/home");
  };

  return (
    <section className="loginContainer">
      {/* Wrapper */}
      <div className="formWrapper">
        <p>Create Your Account</p>

        <form onSubmit={handleOnSubmit}>
          {/* Username Field */}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username...."
              autoFocus
              value={formData.username}
              onChange={handleOnChange}
            />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              placeholder="Enter email...."
              autoFocus
            />
          </div>
          {/* Password Field */}
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password...."
              value={formData.password}
              onChange={handleOnChange}
            />
          </div>

          {/* Button Wrapper */}
          <div className="buttonWrapper">
            <button type="submit">Register</button>
          </div>

          {/* Go to Register Page */}
          <div style={{ borderBottom: 0 }}>
            <p>
              Already have an account?{" "}
              <Link to="/" style={{ textDecoration: "underline" }}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
