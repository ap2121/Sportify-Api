const Router = require('express').Router()
const PostRouter = require('./PostRouter')
const UserRouter = require('./UserRouter')
const SportRouter = require('./SportRouter')
const AuthRouter = require('./AuthRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/comments', CommentRouter)
Router.use('/posts', PostRouter)
Router.use('/users', UserRouter)
Router.use('/sports', SportRouter)
Router.use('/auth', AuthRouter)

module.exports = Router