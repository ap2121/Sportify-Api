const {Post, User, Sport, sequelize} = require('../models')

const getAllPosts = async (req, res) => {
   try {
    const posts = await Post.findAll()
    res.send(posts)
   } catch(error) {
    throw error
   }
}

module.exports = {
    getAllPosts
}