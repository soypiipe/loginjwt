const userRouter = require('express').Router()
const userController = require('../controllers/users')
const authController = require('../controllers/auth')
const validateToken = require('../services/validate-token')

userRouter.post('/user/login', authController.login)

userRouter.post('/user/register', userController.register)

userRouter.get('/user/users', userController.getAll)

module.exports = userRouter