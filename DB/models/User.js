const mongoose = require('mongoose')
const CryptoJS = require('crypto-js')

const Citizen_Schema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        // email: { type: String, required: true, unique: true },
        age: { type: Number, required: true },
        phone: { type: Number, required: true },
        Current_Address: { type: String, required: true },
        city: { type: String, required: true },
        Gender: { type: String, required: true },
        country: { type: String, required: true },
        National_ID: {
          type: String,
          required: true,
          unique: true
        },
        Social_Status: {
          type: String,
          required: true
        },
        Eduction_Status: {
          type: String,
          required: true
        },
        Job: {
          type: String,
          required: true
        },
        Birth_Day: {
          type: Date,
          required: true
        },
        Feature1: [],
        Feature2: [],
        Feature3: [],
        Feature4: [],
        Feature5: [],
        Feature6: [],
        Zip : Number,
        picture:String
      },
      {
        timestamps: true
      }
)


exports.Citizen_Model = mongoose.model('Citizen', Citizen_Schema)
