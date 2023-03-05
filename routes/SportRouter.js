const Router = require('express').Router()
const controller = require('../controllers/SportController')

Router.get('/all-sports', controller.getAllSports)
Router.get('/:sport_id', controller.getSportById)

module.exports = Router