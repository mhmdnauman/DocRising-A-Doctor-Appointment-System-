import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {

  const [credentials, setCredentials] = useState({name:"", password: "",email: "", username: "", qualification: "", specialization: "", phoneNo: ""}) 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:credentials.name, password: credentials.password,email: credentials.email, username: credentials.username, qualification: credentials.qualification, specialization: credentials.specialization, phoneNo: credentials.phoneNo})
        });
        const json = await response.json()
        console.log(json);
        if (json.error===undefined){
            alert("Signed up Successfully");
            localStorage.setItem('token', json.authtoken); 

        }
        else{
            alert(json.error);
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }






    return (
      <div className="formCenter">
        <form onSubmit={handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={credentials.name} onChange={onChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={credentials.password} onChange={onChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={credentials.email} onChange={onChange}            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              User Name
            </label>
            <input
              type="text"
              id="username"
              className="formFieldInput"
              placeholder="Enter a username"
              name="username"
              value={credentials.username} onChange={onChange}            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Qualification
            </label>
            <input
              type="text"
              id="qualification"
              className="formFieldInput"
              placeholder="Enter your Qualification"
              name="qualification"
              value={credentials.qualification} onChange={onChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Specialization
            </label>
            <input
              type="text"
              id="specialization"
              className="formFieldInput"
              placeholder="Enter your Specialization"
              name="specialization"
              value={credentials.specialization} onChange={onChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNo"
              className="formFieldInput"
              placeholder="Enter your Phone Number"
              name="phoneNo"
              value={credentials.phoneNo} onChange={onChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField">
          <button className="formFieldButton" type="submit">Sign Up</button>{" "}
            <Link to="/" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
export default SignUpForm;
