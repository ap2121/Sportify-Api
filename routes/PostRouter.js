const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.get('/posts-by-sport/:sport_id', controller.getPostsBySport)
Router.post('/create-post', controller.createPost)
module.exports = Router