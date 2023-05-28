const Users = require('./User')
const User = {
    create: async (req,res) =>{
        const user = new Users(req.body)
        const userSaved = await user.save()
        res.status(201).send(userSaved._id)
    }
}

module.exports = User