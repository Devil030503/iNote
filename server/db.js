const mongoose = require('mongoose')

const dotenv = require('dotenv')

dotenv.config()

const connectToMongo = ()=> {
    mongoose.connect(process.env.DATABASE_URL)
}

module.exports = connectToMongo