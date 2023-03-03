const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.get('/all-posts', controller.getAllPosts)

module.exports = Router