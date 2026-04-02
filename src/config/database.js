const mongoose = require('mongoose')


const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rk45:uRSA5Yf1DSPBcvbN@rk45.hd7cgps.mongodb.net/devtinder')
}

module.exports = connectDB

