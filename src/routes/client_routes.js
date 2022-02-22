//const { Router } = require('express')
const express = require('express')
const {set} = require('mongoose')
const clientSchema = require('../models/client_model')
const route = express.Router()

//Crear la ruta para creacion de usuarios
route.post('/client',(req,res)=>{
    const client = clientSchema(req.body)
    client
        .save()
        .then(data=>res.json(data))
        .catch((error) => res.json({message:error}))
})

route.get('/client',(req, res)=>{
    clientSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})

//Mostrar info de usuario especifico
route.get('/client/:id',(req, res)=>{
    const id = req.params
    clientSchema
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))  
})

//Eliminar un usuario especifico
route.delete('/client/:id',(req, res)=>{
    const {id} = req.params
    clientSchema
        .remove({_id:id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))  
})

//Editar un usuario especifico
route.put('/client/:id',(req, res)=>{
    const {id} = req.params
    const {name, lastname,age, email,address} = req.body
    clientSchema
        .updateOne({_id:id},{$set:{name, lastname,age, email, address}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))  
})

module.exports = route



