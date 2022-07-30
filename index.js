const express = require('express')
const { connection_to_DB } = require('./DB/connection')
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT
const User_Router = require('./Modules/User_module/User_Routes')
 app.use(express.json())
app.use("/pictures" , express.static("./pictures"))

// ======================== cors ========================
app.use(
  cors({
    origin: '*'
})
)

connection_to_DB()
app.use(User_Router)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
