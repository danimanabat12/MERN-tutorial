// User, login, get user info

const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getMe} = require('../controllers/UserController')

// By protecting, we mean na dili mag-appear sa link ang password, token, uid, password. 
const {protect} = require('../middleware/authMiddleware')
// Add a user through post request. 
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router