const { Post, User, Sport, sequelize } = require('../models')

const getAllSports = async (req, res) => {
    try {
        const sports = await Sport.findAll()
        res.send(sports)
    } catch (error) {
        throw error
    }
}

const getSportById = async (req, res) => {
    try {
        let id = parseInt(req.params.sport_id)
        const sport = await Sport.findByPk(id, {
            include: { model: Post }
        })
        res.send(sport)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllSports,
    getSportById
}