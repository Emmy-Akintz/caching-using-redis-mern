const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
//! connect to mongodb
mongoose.connect(
    process.env.MONGO_CONNECTION_STRING
)
    .then(() => console.log(`DB is connected`))
    .catch((e) => console.log(e))

const app = express()


//! Middlewares
app.use(express.json())


//! Start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running`))