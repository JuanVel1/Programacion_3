const mongoose = require('mongoose')
//creando el modelo, se debe crear el model y el router
const user_schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    }
})
//exportamos el modelo
module.exports = mongoose.model('user_document', user_schema)