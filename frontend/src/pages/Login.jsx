import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const Login = () => {
  const navigate = useNavigate();
  const { changeStatus } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    changeStatus(true);
    navigate("/home");
  };

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section className="loginContainer">
      {/* Wrapper */}
      <div className="formWrapper">
        <p>Welcome back</p>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email...."
              autoFocus
              value={formData.email}
              onChange={handleOnChange}
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
            <button type="submit" className="btn primary">
              {isLoading && (
                <div className=" grid place-content-center bg-white-light/30 ">
                  <span className="animate-spin border-2 border-pink-600 !border-l-transparent  rounded-full w-3 h-3 inline-flex"></span>
                </div>
              )}
              <span>Login</span>
            </button>
          </div>

          {/* Go to Register Page */}
          <div style={{ borderBottom: 0 }}>
            <p>
              Don't have an account?{" "}
              <Link to="/register" style={{ textDecoration: "underline" }}>
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
