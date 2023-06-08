import React from "react";
import Sidebar from "../Components/Sidebar";
import "../styles/Dashboard.css";
import dashboardimg from "./daaash.jpg";

function Dashboard() {
  const currentDate = new Date();

  const today = currentDate.toDateString();
  const currentTime = currentDate.toLocaleTimeString();

  console.log(today + currentTime);
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="header">
          <h3 style={{ color: "green" }}>
            <b>Dashboard</b>
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <div className="line">
            <span>
              {" "}
              <h3>Welcome to our online doctor appointment system!</h3>
              <br></br> Our platform provides a convenient and efficient way for
              patients to connect with doctors and schedule appointments. On our
              landing page, you will find comprehensive profiles of the doctors
              available on our platform. Our doctor's profile landing page is
              designed to give you a detailed overview of each doctor's
              expertise, qualifications, and experience. You can easily search
              for doctors based on their specialties, ensuring that you find the
              right healthcare professional for your specific needs.Our online
              doctor appointment system prioritizes the seamless connection
              between patients and doctors, ensuring a user-friendly experience
              that simplifies the healthcare journey.{" "}
              <img src={dashboardimg} alt="dashboardimg" />
            </span>
          </div>
        </div>

        <div style={{ position: "absolute", left: "88%", marginTop: "10px" }}>
          <h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="20"
              fill="currentColor"
              class="bi bi-calendar-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
            {today} <br />
            {/* {currentTime} */}
          </h5>
        </div>
        <div className="content"></div>
      </div>
    </>
  );
}

export default Dashboard;
