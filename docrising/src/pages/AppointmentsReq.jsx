import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

function AppointmentsReq() {
  const [Appointments, setAppointments] = useState();
  let i = 1;
  let docid = localStorage.getItem("docid");
  const navigate = useNavigate();
  const navigateDel = useNavigate();

  useEffect(() => {
    async function fetchApp() {
      const response = await axios.post(
        "http://localhost:5000/api/appointments/getAppointments",
        {
          docid: docid,
        },
        {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        }
      );
      setAppointments(response.data);
    }
    fetchApp();
  }, []);

  async function BookApp(event, appid) {
    const response = await axios.put(
      `http://localhost:5000/api/appointments/updateapp/${appid}`,
      {
        userid: docid,
      },
      {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      }
    );
    window.location.reload(true);
  }

  async function CancelApp(event, appid) {
    const response = await axios.put(
      `http://localhost:5000/api/appointments/deleteapp/${appid}`,
      {
        userid: docid,
      },
      {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      }
    );
    navigate("/Appointments");
  }

  if (!Appointments) {
    return (
      <div>
        <center>
          <div>
            <h1 className="formTitleLink">DocRising</h1>
          </div>
          <div>
            <Spinner animation="border" variant="primary" />
          </div>
        </center>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <div style={{ padding: 10 }}>
          <Row xs={1} md={4} className="g-4">
            {Array.from(Appointments).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://cdn0.iconfinder.com/data/icons/medical-2-4/48/68-512.png"
                  />
                  <Card.Body>
                    <Card.Title>
                      Name: {Appointments[idx].FirstName}{" "}
                      {Appointments[idx].LastName}
                    </Card.Title>
                    <Card.Text>
                      Service Required: {Appointments[idx].Service}
                    </Card.Text>
                    <Card.Text>Age: {Appointments[idx].Age}</Card.Text>
                    <Card.Text>Gender: {Appointments[idx].Gender}</Card.Text>
                    <Card.Text>
                      Requested Date: {Appointments[idx].Date}
                    </Card.Text>
                    <Button
                      onClick={(event) => BookApp(event, Appointments[idx]._id)}
                      variant="success"
                    >
                      Book Appointment
                    </Button>{" "}
                    <Button
                      onClick={(event) =>
                        CancelApp(event, Appointments[idx]._id)
                      }
                      variant="danger"
                    >
                      Cancel
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default AppointmentsReq;
