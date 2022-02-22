//product, img, price, cant, state
const express = require('express')
const { set } = require('mongoose')
const productSchema = require('../models/product_model')
const route = express.Router()

//Crear la ruta para creacion de productos
route.post('/product', (req, res) => {
    const product = productSchema(req.body)
    product
        .save()
        .then(data => res.json(data))
        .catch((error) => res.json({ message: error }))
})

route.get('/product', (req, res) => {
    productSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))

})

//Mostrar info de producto especifico
route.get('/product/:id', (req, res) => {
    const id = req.params
    productSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Eliminar un producto especifico
route.delete('/product/:id', (req, res) => {
    const { id } = req.params
    productSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Editar un producto especifico
route.put('/product/:id', (req, res) => {
    const { id } = req.params
    const { product, img, price, cant, state } = req.body
    productSchema
        .updateOne({ _id: id }, { $set: { product, img, price, cant, state } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = route



