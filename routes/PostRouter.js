const Router = require('express').Router()
const controller = require('../controllers/PostController')



Router.get('/posts-by-sport/:sport_id', controller.getPostsBySport)
Router.post('/create-post/:user_id/:sport_id', controller.createPost)
Router.get('/get-post/:post_id', controller.getPostById)
Router.delete('/delete-post/:post_id', 
controller.deletePost)
Router.put('/edit-post/:post_id', 
controller.updatePost)
module.exports = Router