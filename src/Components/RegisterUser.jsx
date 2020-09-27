import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function RegisterUser() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const registerUser = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //   success
        if (auth) {
          history.push("/login");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="amazon"
        />
      </Link>
      <div className="login__container">
        <h1>Register </h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login__registerButton" onClick={registerUser}>
            Create your Amazon Account
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Clone Conditions of Use and
          Privacy Notice.
        </p>
      </div>
    </div>
  );
}

export default RegisterUser;
