import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import signUpImg from "./images/Signup.png";
const Login = (props) => {
  const [phoneNo, setPhoneNo] = useState();
  const [password, setPassword] = useState();

  const style = {
    textDecoration: "none",
    color: "#1db5e5",
  };
  sessionStorage.setItem("pNo", phoneNo);
  //   useEffect(() => {
  // const submitBtn = document.querySelector("button");
  // submitBtn.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   getToken();
  // });
  // async function getToken() {
  //   const form = document.getElementById("login-form");
  //   const formData = Object.fromEntries(new FormData(form).entries());
  //   console.log(formData, JSON.stringify(formData));
  //   const rawres = await fetch("http://localhost:5000/login", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   const res = await rawres.json();
  //   localStorage.setItem("apiToken", res.token);
  //   localStorage.setItem("refreshToken", res.refreshToken);
  //   localStorage.setItem("tokenRecieved", true);
  //   localStorage.setItem("username", formData.username);
  //   props.setToken(true);
  //   console.log(res);
  // }
  //   }, []);

  return (
    <div className="login">
      <div className="nav">
        <div className="logo">
          dr.<span>docs</span>
        </div>
      </div>
      <div className="login-container">
        <form className="login-form" id="login-form">
          <p>Welcome back!</p>
          <input
            id="username"
            name="phoneNo"
            type="text"
            placeholder="Phone No."
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
              sessionStorage.setItem("phoneNo", phoneNo);
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-links">
            <a href="/sign-up" style={style}>
              Sign Up ?
            </a>
            <p className="forget-pass">Forget Password ?</p>
          </div>
          <button
            className="submit"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              props.test(true);
            }}
          >
            Login
          </button>
        </form>
        <div className="signup-img"></div>
      </div>
    </div>
  );
};

export default Login;
