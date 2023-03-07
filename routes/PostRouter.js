const Router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')
Router.get('/posts-by-sport/:sport_id', controller.getPostsBySport)
Router.post('/create-post/:user_id/:sport_id', controller.createPost)
Router.get('/get-post/:post_id', controller.getPostById)
Router.delete('/delete-post/:post_id', 
middleware.stripToken,
middleware.verifyToken,
controller.deletePost)
Router.put('/edit-post/:post_id', 
middleware.stripToken,
middleware.verifyToken,
controller.updatePost)
module.exports = Router