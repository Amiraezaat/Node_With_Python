const { Citizen_Model } = require('../../../DB/models/User')
const catchAsync_error = require('../../../Utils/catchAsync_error')


//============= get user data by his national id ==========
exports.get_user = catchAsync_error(async (req, res, next) => {
  const { National_ID } = req.body
  const user = await Citizen_Model.findOne({ National_ID }).select(
    '-Feature1 -Feature2 -Feature3 -Feature4 -Feature5 -Feature6'
  )
  if (user) {
    res.status(200).json({ message: '✅ Done! Please check your data', Your_Data: user })
  } else {
    res.status(404).json({ message: 'in-valid National ID ' })
  }
})

//============== get user data by his features ====================
exports.get_user_by_feature = catchAsync_error(async (req, res, next) => {
    const { feature } = req.body
    const user = await Citizen_Model.findOne({
      $or: [
        {
          Feature1: feature
        },
        {
          Feature2: feature
        },
        {
          Feature3: feature
        },
        {
          Feature4: feature
        },
        {
          Feature5: feature
        },
        {
          Feature6: feature
        }
      ]
    }).select('-Feature1 -Feature2 -Feature3 -Feature4 -Feature5 -Feature6 -_id')
    if (user) {
      res.status(200).json({ message: '✅ Done! Please check your data', Your_Data: user })
    } else {
      res.status(401).json({ message: 'Access denied' })
    }
  })
  