const express = require("express");
const mongoose = require("mongoose"); // conectando a mongoose
require('dotenv').config()
const port = process.env.PORT || 3000 //Configurando el puerto, env - variable de ambiente, se busca la variable PORT y se busca si esta ocupado el puerto 5000
const execute_app = express()//LLamado de la constante express para uso de la libreria express
//conexion al puerto 3000
execute_app.listen(port, () => { console.log('Listening the port', port) }) // imprime el numero de puerto que se esta activo 

//creando la primera solicitud con request and response para acceder a http://localhost:3000
//Con URI --> execute_app.get('/home', (req, res) => res.send('Programacion III'))
execute_app.get('/', (req, res) => res.send('Programacion III'))
mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log('connect with mongoDB'))
    .catch((error) => console.log('error encontrado -->', error))

const userSchemaRoutes = require('./routes/user_routes')
//Middleware
execute_app.use(express.json())
//Crear usuario https://localhost:3000/dashboard/user
//Consultar usuario https://localhost:3000/dashboard/users
execute_app.use('/dashborad', userSchemaRoutes)