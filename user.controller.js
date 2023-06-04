const Users = require('./User')

const User = {
    list: async (req,res) => {
        const users = await Users.find()
        res.status(200).send(users)
    },
    create: async (req,res) =>{
        const user = new Users(req.body)
        const userSaved = await user.save()
        res.status(201).send(userSaved._id)
    }
}

module.exports = User