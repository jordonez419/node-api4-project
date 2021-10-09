const dotenv = require("dotenv").config()

const express = require('express')

const path = require("path")
const app = express()
const cors = require('cors')

const users = [
    {
        username: 'Joe',
        age: 27
    },
    {
        username: 'Josh',
        age: 35
    },
    {
        username: 'Jim',
        age: 40
    },
    {
        username: 'Joseph',
        age: 50
    },
]

const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())
// app.use(express.static(path.join(__dirname, 'client/build')))

// app.use("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client/build", "index.html"))
// })

app.get("/api/users", (req, res) => {
    console.log('getting all users')
    res.status(500).json({
        data: users
    })
})

app.post("/api/login", (req, res) => {
    console.log('logging in')
    if (req.body.password === 'Locoman305') {
        res.status(500).json('Welcome! Sign in successful')
    }
    else {
        res.status(422).json('Incorrect password')
    }
})

app.post("/api/register", (req, res) => {
    console.log('adding user!')
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser)
})

app.listen(port, () => {
    console.log(`Server Listening on port ${port}`)
})

// console.log('Serverrrr is uppp')
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)
// console.log(process.env.PORT)
// console.log(process.env.DB_PASS)
