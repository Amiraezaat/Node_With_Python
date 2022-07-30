const express = require('express')
const { connection_to_DB } = require('./DB/connection')
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT
const User_Router = require('./Modules/User_module/User_Routes')
// ======================== cors ========================
app.use(
  cors({
    origin: '*'
})
)
app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.json())
app.use("/pictures" , express.static("./pictures"))

connection_to_DB()
app.use(User_Router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
