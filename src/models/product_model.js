//product, img, price, cant, state
const mongoose = require('mongoose')
//creando el modelo, se debe crear el model y el router
const model_schema = mongoose.Schema({
    product: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    cant: {
        type: Number,
        require: true
    },
    state: {
        type: Boolean,
        require: true
    }
})
//exportamos el modelo
module.exports = mongoose.model('product_document', model_schema)