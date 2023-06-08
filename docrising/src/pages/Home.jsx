import React, { Component, useRef, useState } from "react";
import {
  HashRouter as Router,
  Route,
  NavLink,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import SignIn from "./SignIn";
import Button from "react-bootstrap/Button";
import Logo from "../../src/logo.jpeg";

const Home = () => {
  const [toggle, setToggle] = useState(<SignInForm />);
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  // const SignInHandle = () => {
  //   setToggle(<SignInForm />);
  // };
  // const SignUpHandle = () => {
  //   setToggle(<SignUpForm />);
  // };
  return (
    <>
      <div className="LogoSec">
        <div className="split">
          <div className="CompName">
            <span>Welcome to</span>
            <span>Doc</span>
            <span>Rising</span>
          </div>
          <center>
            <Button variant="outline-secondary" onClick={handleClick}>
              Login as Doctor
            </Button>
          </center>
        </div>
      </div>
      <div className="App">
        <div ref={ref} className="appAside">
          <center>
            <img src={Logo} />
          </center>
        </div>
        <div className="appForm">
          <div className="pageSwitcher"></div>

          <div className="formTitle">
            <NavLink to="/SignIn" className="formTitleLink">
              Sign In
            </NavLink>{" "}
            or{" "}
            <NavLink to="/SignUp" className="formTitleLink">
              Sign Up
            </NavLink>
          </div>
          <div>{toggle}</div>
        </div>
      </div>
    </>
  );
};
export default Home;
