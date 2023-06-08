import React, { Component, useRef, useState } from "react";
import {
  HashRouter as Router,
  Route,
  NavLink,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Appointments from "./pages/Appointments";
import AppointmentsReq from "./pages/AppointmentsReq";
import Profile from "./pages/Profile";

import "./App.css";
import Prescription from "./pages/Prescription";

function App() {
  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn?<Dashboard />:<Home/>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Appointments" element={<Appointments />} />
          <Route path="/AppointmentsReq" element={<AppointmentsReq />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Prescription" element={<Prescription />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
