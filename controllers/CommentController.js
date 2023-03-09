const { Comment, Post, User } = require('../models')

const getCommentsByPost = async (req, res) => {
    try {
        const { post_id } = req.params
        const comments = await Comment.findAll({
            where: { postId: post_id },
            include: [{ model: Post }, { model: User }]
        })
        res.send(comments)
    } catch (error) {
        throw error
    }
}

const createComment = async (req, res) => {
    try {
        const userId = req.params.user_id
        const postId = req.params.post_id
        let commentBody = {
            userId,
            postId,
            ...req.body
        }
        let comment = await Comment.create(commentBody)
        res.send(comment)
    } catch (error) {
        throw error
    }
}

const deleteComment = async (req, res) => {
    try {
        const id = parseInt(req.params.comment_id)
        await Comment.destroy({where: {id: id}})
        res.send({msg: `deleted with an id of ${id}` })
    } catch (error) {
        throw error
    }
}

module.exports = {
    getCommentsByPost,
    createComment,
    deleteComment,
}