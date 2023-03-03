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
    
}




module.exports = {
    getPostsBySport,
    createPost
}