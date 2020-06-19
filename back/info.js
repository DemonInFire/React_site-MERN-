const mongoose = require('mongoose')

const regInfo = new mongoose.Schema({
    info:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
})

module.exports = RegistrationInfo = mongoose.model('registrationInfos',regInfo)