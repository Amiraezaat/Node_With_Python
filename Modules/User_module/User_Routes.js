const validation = require('../../Middelware/validation')
const { my_multer, fileExtensions } = require('../../services/multer')
const { add_user, add_picture } = require('./controller/add_user')
const { get_user_by_feature, get_user } = require('./controller/get_user')
const { Add_user_schema, get_user_schema } = require('./User_Validation')

const router = require('express').Router()

router.post('/adduser', validation(Add_user_schema), add_user)
router.get('/getuser', validation(get_user_schema), get_user)
router.get('/getuser_features', get_user_by_feature)
router.post(
  '/addpicture',
  my_multer('Citizens', fileExtensions.ImageEX).single('image'),
  add_picture
)
module.exports = router
