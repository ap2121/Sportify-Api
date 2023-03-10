const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/get-all-comments/:post_id', controller.getCommentsByPost )
Router.post('/create-comment/:user_id/:post_id', controller.createComment)
Router.delete('/delete-comment/:comment_id', controller.deleteComment )
Router.get('/all-comments', controller.getAllComments)

module.exports = Router