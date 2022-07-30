const { Citizen_Model } = require('../../../DB/models/User')
const catchAsync_error = require('../../../Utils/catchAsync_error')
const fs = require("fs")



//============== Add citizan data ===========================
exports.add_user = catchAsync_error(async (req, res, next) => {
  const {
    firstName,
    lastName,
    age,
    phone,
    Current_Address,
    city,
    Gender,
    country,
    Birth_Day,
    Job,
    Social_Status,
    Eduction_Status,
    National_ID,
    Zip
  } = req.body
  const user = await Citizen_Model.findOne({ National_ID })
  if (!user) {
    res.status(404).json({
      message: 'please enter a valid national id OR take your eature first'
    })
  } else {
    await Citizen_Model.updateOne(
      { National_ID },
      {
        firstName,
        lastName,
        age,
        phone,
        Current_Address,
        city,
        Gender,
        country,
        Birth_Day,
        Job,
        Social_Status,
        Eduction_Status,
        Zip,
        $inc: { __v: 1 }
      }
    )
    res.status(200).json({ message: 'your data Added successfully' })
  }
})


//===============Add the picture of the citizen ==============
exports.add_picture = catchAsync_error(async (req, res,next) => {
    if (req.ExtensionError) {
        res
          .status(400)
          .json({ message: 'in-valid image extension' })
      } else {
        const { National_ID }= req.body
        const imageURL = `${req.protocol}://${req.headers.host}/${req.destinationFile}/${req.file.filename}`
        const user = await Citizen_Model.findOne({ National_ID })
        if (user.picture) {
           
          const unlinkPath = req.destinationFile + user.picture.split(`${req.destinationFile}`)[1]
         
          fs.unlinkSync(unlinkPath, function (err) {
            if (err) {
              console.log("can't delete your picture" )
            } else {
              console.log('file deleted')
            }
          })
          await Citizen_Model.updateOne(
            { National_ID },
            { picture: imageURL }
          )
        } else {
          await Citizen_Model.updateOne(
            { National_ID},
            { picture: imageURL }
          )
        }
        res.status(200).json({ message: 'Done' })
      }
})
