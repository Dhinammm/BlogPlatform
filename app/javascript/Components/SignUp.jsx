import React, { useState } from "react";
import axios from "axios";
import Home from "./Home"
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  // Get CSRF token from meta tag
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/users",
        {
          user: { name, email, password, password_confirmation: passwordConfirmation },
        },
        {
          headers: {
            "X-CSRF-Token": csrfToken,
          },
        }
      );

      alert("Account created successfully! ");
      window.location.href = "/"; // Redirect to homepage after successful sign-up
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert("Something went wrong! Please try again.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Sign Up</h2>

      {/* Show error messages */}
      {errors.length > 0 && (
        <div className="alert alert-danger">
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-4 shadow-sm bg-light rounded">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUp;
