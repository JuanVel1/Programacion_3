const express = require('express')
const {set} = require('mongoose')
const userSchema = require('../models/user')
const route = express.Router()

//Crear la ruta para creacion de usuarios
route.post('/user',(req,res)=>{
    const user = userSchema(req, body)
    user
        .save()
        .then(data=>res.json(data))
        .catch((error) => res.json({message:error}))
})

route.get('/user',(req, res)=>{
    userSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})

//Mostrar info de usuario especifico
route.get('./user/:id',(req, res)=>{
    const id = req.params
    userSchema
        .find(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))  
})

//Eliminar un usuario especifico
route.delete('./user/:id',(req, res)=>{
    const {id} = req.params
    userSchema
        .remove({_id:id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))  
})

//Editar un usuario especifico
route.put('./user/:id',(req, res)=>{
    const {id} = req.params
    const {name, lastname,age, email} = req.params
    userSchema
        .updateOne({_id:id},{$set:{name, lastname,age, email}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))  
})





