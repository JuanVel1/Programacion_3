const express = require("express");
const app = express()//LLamado de la constante express para uso de la libreria express
const port = process.env.PORT || 3000 //Configurando el puerto, env - variable de ambiente, se busca la variable PORT y se busca si esta ocupado el puerto 5000
//conexion al puerto 3000
const mongoose = require("mongoose") // conectando a mongoose
const clientSchemaRoutes = require('./routes/client_routes')
const productSchemaRoutes = require('./routes/product_routes')
require("dotenv").config()

//const clientRoute = require("./routes/client_routes")
app.listen(port, () => { console.log('Listening the port', port) }) // imprime el numero de puerto que se esta activo 

//creando la primera solicitud con request and response para acceder a http://localhost:3000
//Con URI --> app.get('/home', (req, res) => res.send('Programacion III'))
app.get('/', (req, res) => res.send('Bienvenido al index del proyecto'))

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log("connect with mongoDB"))
    .catch((error) => console.log('error encontrado -->', error))
//Middleware
app.use(express.json())
//Crear usuario https://localhost:3000/api/user
//Consultar usuario https://localhost:3000/api/users

//Crear usuario https://localhost:3000/api/client_routes
//Consultar usuario https://localhost:3000/api/product_routes
app.use('/api', clientSchemaRoutes)
app.use('/api', productSchemaRoutes)