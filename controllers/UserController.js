const { Post, User, Sport, SportUser, sequelize } = require('../models')

const findUserById = async (req, res) => {
    try {
        let userId = req.params.user_id
        const user = await User.findByPk(userId)
        res.send(user)
    } catch (error) {
        throw error
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
        throw error
    }

}

const deleteUser = async (req, res) => {
    try {
        let id = req.params.user_id
        await User.destroy({
            where: { id: id }
        })
        res.send(`User with id ${id} deleted`)

    } catch (error) {
        throw error
    }

}

const getSportsByUser = async (req, res) => {
    try {
        let userId = req.params.user_id
        const user = await User.findByPk(userId, {
            include: [{
                model: Sport,
                as: 'sport_list',
                through: {attributes: []}
            }]
        })
        res.send(user)
    } catch (error) {
        throw error
    }
}

const addSportToUser = async (req, res) => {
    try {
        let userId = req.params.user_id
        let sportId = req.params.sport_id
        let userSportBody = {
            userId,
            sportId
        }
        let followed = await SportUser.create(userSportBody)
        res.send(followed)
    } catch (error) {
        throw error
    }

}



module.exports = {
    getAllUsers,
    deleteUser,
    getSportsByUser,
    addSportToUser,
    findUserById
}