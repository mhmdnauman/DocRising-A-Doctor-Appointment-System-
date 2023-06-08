const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    specialization:{
        type: String,
        required: true
    },
    phoneNo:{
        type: Number,
        required: true
    },
    rating:{
        type: Number
    },
    date:{
        type: Date,
        default: Date.now
    },
    UnAvTime:{
        type: [Date]
    }
  });
  const User = mongoose.model('DoctorsUserData', UserSchema);
  module.exports = User;