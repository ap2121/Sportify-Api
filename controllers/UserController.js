const {Post, User, Sport, sequelize} = require('../models')

const getAllUsers = async (req, res) => {
    const users = await User.findAll()
    res.send(users)
}

const deleteUser = async (req, res) => {
    let id = req.params.user_id
         await User.destroy({
        where:{id:id}
    })
    res.send(`User with id ${id} deleted`)

}


module.exports = {
    getAllUsers,
    deleteUser
}