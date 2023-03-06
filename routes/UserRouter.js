const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/all-users',controller.getAllUsers)
Router.delete('/:user_id', controller.deleteUser)



module.exports = Router

