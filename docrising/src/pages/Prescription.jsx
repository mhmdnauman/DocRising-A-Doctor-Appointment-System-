import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/Prescription.css";

const Prescription = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [prescriptionData, setPrescriptionData] = useState({
    patientName: "",
    medication: "",
    dosage: "",
  });

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

  return (
    <div>
      <button onClick={handleOpenModal}>Write Prescription</button>{" "}
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
    </div>
  );
};

export default Prescription;
// import React from "react";

// const Prescription = () => {
//   const handlePrescriptionPrompt = () => {
//     const patientName = window.prompt("Enter patient name:");
//     const medication = window.prompt("Enter medication:");
//     const dosage = window.prompt("Enter dosage:");

//     // Do something with the prescription data
//     console.log("Prescription data:", { patientName, medication, dosage });
//   };

//   return <button onClick={handlePrescriptionPrompt}>Write Prescription</button>;
// };

// export default Prescription;
