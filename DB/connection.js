const  mongoose = require("mongoose")



exports.connection_to_DB = ()=>{
    return mongoose
    .connect(process.env.CONNECTION_URL)
    .then((res)=> console.log("DB Connected Successfully"))
    .catch((err)=> console.log("DB connected Fail"))
}