import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "../styles/Prescription.css";

function Appointments() {
  const [Appointments, setAppointments] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [prescriptionData, setPrescriptionData] = useState({
    patientName: "",
    medication: "",
    dosage: "",
  });

  let docid = localStorage.getItem("docid");
  let i = 1;
  const navigate = useNavigate();

  //   const [showPrescription, setShowPrescription] = useState(false);
  //   const handleButtonClick = () => {
  //     setShowPrescription(true);
  //   };

  const CompleteApp = async (event, appid) => {
    const response = await axios.put(
      `http://localhost:5000/api/appointments/updateapp/${appid}`,
      {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      }
    );
    navigate("/Appointments");
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPrescriptionData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the prescription data
    console.log("Prescription data:", prescriptionData);
    setPrescriptionData({
      patientName: "",
      medication: "",
      dosage: "",
    });
    setModalIsOpen(false);
  };

  useEffect(() => {
    async function fetchApp() {
      const response = await axios.post(
        "http://localhost:5000/api/appointments/getAppAppointments",
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

  console.log(Appointments);

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

                    <Button onClick={handleOpenModal} variant="primary">
                      Write Prescription
                    </Button>

                    <Modal
                      className="model"
                      isOpen={modalIsOpen}
                      onRequestClose={handleCloseModal}
                    >
                      <h2>Prescription</h2>
                      <form onSubmit={handleSubmit}>
                        <br></br> <br></br>
                        <label>
                          Medication:
                          <input
                            placeholder="write here.."
                            className="inp"
                            type="text"
                            name="medication"
                            value={prescriptionData.medication}
                            onChange={handleInputChange}
                          />
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                          Dosage:
                          <input
                            placeholder="write here.."
                            className="inp"
                            type="text"
                            name="dosage"
                            value={prescriptionData.dosage}
                            onChange={handleInputChange}
                          />
                        </label>
                        <br></br>
                        <br></br>
                        <button
                          style={{ fontSize: "small", width: "auto" }}
                          className="btn btn-success"
                          type="submit"
                        >
                          Submit Prescription
                        </button>
                      </form>
                    </Modal>

                    <Button
                      onClick={(event) =>
                        CompleteApp(event, Appointments[idx]._id)
                      }
                      variant="success"
                    >
                      Complete Appointment
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

export default Appointments;
