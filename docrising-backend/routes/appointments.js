const express = require('express');
const Appointments = require('../models/Appointments');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const User = require('../models/User');

router.post('/getAppointments',  async (req, res) => {

    try {
      const app = await Appointments.find({docid: req.body.docid, Status: "Pending"})
      res.send(app)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })


  router.post('/getAppAppointments',  async (req, res) => {

    try {
      const app = await Appointments.find({docid: req.body.docid, Status: "Approved"})
      res.send(app)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })

  router.put('/updateapp/:id', async (req, res) => {
    try {
        // Create a newNote object
        const newApp = {};
        const newUser = {
          UnAvTime : []
        };

        newApp.Status = "Approved";
        
        // Find the note to be updated and update it
        let appointment = await Appointments.findById(req.params.id);
        if (!appointment) { return res.status(404).send("Not Found") }
       newUser.UnAvTime.push(appointment.date); 
        
        if (appointment.username !== req.username) {
          return res.status(401).send("Not Allowed");
        }
       user = await User.findByIdAndUpdate(req.userid, {$push: newUser}, {new: true});
        appointment = await Appointments.findByIdAndUpdate(req.params.id, { $set: newApp }, { new: true })
        res.json({ appointment});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


router.put('/deleteapp/:id', async (req, res) => {
  try {
      // Create a newNote object
      const newApp = {};
      const newUser = {
        UnAvTime : []
      };

      newApp.Status = "Canceled";
      
      // Find the note to be updated and update it
      let appointment = await Appointments.findById(req.params.id);
      if (!appointment) { return res.status(404).send("Not Found") }
     newUser.UnAvTime.push(appointment.date); 
      
      if (appointment.username !== req.username) {
        return res.status(401).send("Not Allowed");
      }
     user = await User.findByIdAndUpdate(req.userid, {$push: newUser}, {new: true});
      appointment = await Appointments.findByIdAndUpdate(req.params.id, { $set: newApp }, { new: true })
      res.json({ appointment});
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

// router.delete('/deleteapp/:id', async (req, res) => {
//   try {
//       // Find the appointment to be delete and delete it
//       let app = await Appointments.findById(req.params.id);
//       if (!app) { return res.status(404).send("Not Found") }

//       // Allow deletion only if user owns this Note

//       app = await Appointments.findByIdAndDelete(req.params.id)
//       res.json({ "Success": "Appointment has been deleted" });
//   } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal Server Error");
//   }
// })

router.put('/completeapp/:id', async (req, res) => {
  try {
      // Create a newNote object
      const newApp = {};
      
      newApp.Status = "Completed";
      
      // Find the note to be updated and update it
      let appointment = await Appointments.findById(req.params.id);
      if (!appointment) { return res.status(404).send("Not Found") }
      
      if (appointment.username !== req.username) {
        return res.status(401).send("Not Allowed");
      }
      appointment = await Appointments.findByIdAndUpdate(req.params.id, { $set: newApp }, { new: true })
      res.json({ appointment});
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})


  module.exports = router