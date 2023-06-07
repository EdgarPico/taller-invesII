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
    },
    update: async (req,res) =>{
        const {id} = req.params
        const user = await Users.findOne({ _id: id })
        Object.assign(user, req.body)
        await user.save()
        res.sendStatus(204)
    },
    destroy: async (req,res) =>{
        const {id} = req.params
        const user = await Users.findOne({_id: id})
        //console.log(user);
        if (user) {
            user.deleteOne()
        }
        res.sendStatus(204)

    }
}
module.exports = User

const userControllerRol = {
    assignRole: async (req, res) => {

    const { userId, roleId } = req.params;
  
    const user = await User.findById({_id: id});

    const role = await Role.findById({_id: id});

    if (!user || !role) {
        return res.status(404).json({ error: 'User o rol no encontrado' });
    }
       
    user.role = role;

    await user.save();
  
    res.status(200).json({ message: 'Role asignado' });

    },
  
  };
  module.exports  = userControllerRol