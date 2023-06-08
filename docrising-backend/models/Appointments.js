const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    FirstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true,
        unique: true
    },
    PhoneNumber:{
        type: Number,
        required: true
    },
    Province:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    Gender:{
        type: String,
        required: true
    },
    Service:{
    type: String    
    },
    date:{
        type: Date,
        default: Date.now
    },
    Status:{
        type: String,
        default: "Pending"
    },
    DoctorUsername:{
        type: String
    }
  });
  const Appointment = mongoose.model('applicantstables', AppointmentSchema);
  module.exports = Appointment;