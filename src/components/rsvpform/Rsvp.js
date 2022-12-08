import React, { useState } from "react";
import "./rsvp.css";
import { useNavigate } from "react-router-dom";


export default function Rsvp({ setCurrentUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          localStorage.setItem("currentUser",JSON.stringify(user))

          // Persists the current user
          setCurrentUser(user)
            navigate("/home");
        });
      } else {
        r.json().then(err => {
          setErrors(err.error)});
      }
    });
  }
  return (
    <div className="container">
      <div>
        <form
          type="submit"
          onSubmit={handleSubmit}
          className="col g-1 needs-validation"
          novalidate
        >
          <div className="im">
            {/* <img className="image" src={`${logo}`} alt="logo" /> */}
          </div>
          <div className="col-md-12">
            <label for="validationCustom01" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control p-0"
              id="validationCustom01"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-12">
            <label for="validationCustom02" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control p-0"
              id="validationCustom02"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-12">
            <input
              className="btn btn-primary p-0 w-100"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <div>
          <p>{errors}</p>
        </div>
      </div>
    </div>
  );
}