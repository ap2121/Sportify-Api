const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/find-user/:user_id', controller.findUserById)
Router.get('/all-users',controller.getAllUsers)
Router.delete('/:user_id', controller.deleteUser)
Router.get('/sports-by-user/:user_id', controller.getSportsByUser)
Router.post('/follow-sport/:user_id/:sport_id', controller.addSportToUser)

module.exports = Router

