const mongoose = require('mongoose')

const Users = mongoose.model('User',{
    puntaje: {type: String,required:true}
})
module.exports = Users