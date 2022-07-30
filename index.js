const express = require('express')
const { connection_to_DB } = require('./DB/connection')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const User_Router = require('./Modules/User_module/User_Routes')
const cors = require('cors')
app.use(express.json())
app.use("/pictures" , express.static("./pictures"))

// ======================== cors ========================
app.use(
  cors({
    credentials: true,
    //   origin: ["http://192.168.1.18:4200"],
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'origin', 'x-csrf-token'],
    optionsSuccessStatus: 204,
    preflightContinue: false
  })
)

connection_to_DB()
app.use(User_Router)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
