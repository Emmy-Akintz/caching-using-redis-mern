const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

//! connect to mongodb
mongoose.connect(
    process.env.MONGO_CONNECTION_STRING
)
    .then(() => console.log(`DB is connected`))
    .catch((e) => console.log(e))

//! User model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
}, {
    timestamps: true,
})

//! User model
const User = mongoose.model('User', userSchema)

const app = express()

//! Middlewares
app.use(express.json())

//! create user route
app.post('/users/create', async (req, res) => {
    try {
        const { name, email } = req.body
        const user = await User.create({ name, email })
        res.json(user)
    } catch (error) {
        res.send("Server error")
    }
})

//! lists
app.post('/users/lists', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.send("Server error")
    }
})

//! Start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running`))