const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://khaqanrough:0330114278@signupuser.8x3qyih.mongodb.net/DocRising"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;