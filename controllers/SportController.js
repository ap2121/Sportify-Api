const {Post, User, Sport, sequelize} = require('../models')
const getAllSports = async (req, res) => {
    const sports = await Sport.findAll()
    res.send(sports)
}

const getSportById = async (req, res) => {
    let id = parseInt(req.params.sport_id)
    const sport = await Sport.findByPk(id, {
        include: {model: Post}
    })
    res.send(sport)
}

module.exports = {
    getAllSports,
    getSportById
}