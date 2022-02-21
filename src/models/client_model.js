const mongoose = require('mongoose')
//creando el modelo, se debe crear el model y el router
const client_schema = mongoose.Schema({
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
    },
    address: {
        city: {
            type: String,
            require: true
        },
        code_zip: {
            type: Number,
            require: true
        },
        lat: {
            type: Number,
            require: true
        },
        len: {
            type: Number,
            require: true
        }
    },
    account_bank: String
})
//exportamos el modelo
module.exports = mongoose.model('client_document', client_schema)