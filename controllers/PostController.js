const { Post, User, Sport, sequelize } = require('../models')

const getPostsBySport = async (req, res) => {
    try {
        const { sport_id } = req.params
        const posts = await Post.findAll({
            where: { sportId: sport_id },
            include: [{ model: User }, { model: Sport }]
        })
        res.send(posts)
    } catch (error) {
        throw error
    }
}

const createPost = async (req, res) => {
    try {
        const userId = req.params.user_id
        const sportId = req.params.sport_id
        let postBody = {
            userId,
            sportId,
            ...req.body
        }
        let post = await Post.create(postBody)
        res.send(post)
    } catch (error) {
        throw error
    }
}

const deletePost = async (req, res) => {
    try {
        const postId = parseInt(req.params.post_id)
        await Post.destroy({where: {id: postId}})
        res.send({msg: `deleted twert with an id of ${postId}` })
    } catch (error) {
        throw error
    }
}

const updatePost = async (req, res) => {
    try {
        let postId = parseInt(req.params.post_id)
        let updatedPost = await Post.update(req.body, {
          where: {id: postId},
          returning: true
        })
        res.send(updatedPost)
      } catch (error) {
        throw error
      }
}




module.exports = {

    getPostsBySport,
    createPost,
    deletePost,
    updatePost
}
