// const http = require('http')
// const puerto = 8080

// const server = http.createServer((req, res) => {
// res.send('Hola')
// })

// server.listen(puerto, () => {
//     console.log(`Servidor escuchando puerto ${puerto}.`)
// })

// -------------------

// Ejercicio 1
// const http = require('http')
// const puerto = 8080

// const server = http.createServer((req, res) => {
//     let hora = new Date()
//     let horaActal = hora.getHours()
//     console.log(horaActal)
//     if(horaActal >= 6 && horaActal <= 12) {
//         res.end( 'Buenos dias')
//     } else if (horaActal >= 13 && horaActal <= 19){
//         res.end( 'Buenas tardes')
//     }else{
//      res.end( 'Buenas noches')}
// })
// server.listen(puerto, () => {
//     console.log(`Servidor escuchando puerto ${puerto}.`)
// })

// -------------------

// RUTAS

// const express = require('express')
// const app = express()
// const puerto = 8080


// app.get('/', (req, res) => {
//     res.send('Hola soy home')
// })

// app.get('/user', (req, res) => {
//     res.send('Hola soy user')
// })

// app.get('/productos', (req, res) => {
//     res.send('Hola soy productos get')
// })

// app.post('/productos', (req, res) => {
//     res.send('Hola soy productos post')
// })

// app.get('/auth', (req, res) => {
//     res.send('Respuesta al logueo??')
// })

// app.post('/auth', (req, res) => {
//     res.send('Alguien intenta losguarse?? ')
// })

// app.get('/user/:id/:nombre', (req, res) => {
//     const { id, nombre } = req.params
//     console.log(req.params)
//     res.send(`Hola soy user ${id}, y nombre: ${nombre}`)
// })

// app.listen(puerto, () => {
//     console.log(`El servidor se inicio en el ${puerto}`)
// })

// -------------------

// Ejercicio 2

const express = require('express')
const app = express()
const puerto = 8080
let visitas = 0

// Midleware. EL use indica q es un m

// Para derivar a un archivo de rutas
// app.use('/'), (res, req)

app.use((req, res, next) => {
    // Para sumar visitas
    visitas++
    next()
    // Se puede usar para validar un usuario:
    // if(rol) {
    //     next()
    //  } else {
    //      res.send({errorCode: 401: "No tenes acceso"})
    //  }
})

app.listen(puerto, (error) => {
   
   if(!error) {
       console.log(`Escuchando el servidor en puerto: ${puerto}`)
   } else {
    console.log(`Hubo un error: ${error}`)
   }
})


app.get('/', (req, res) => {
    res.send('<h1 style="color: blue"> bienvenido al servidor Express </h1>')
})

app.get('/visitas', (req, res) => {
       res.send(`La cantidad de visitas es: ${visitas}`)
})

// Midleware solo para fyh. Cascada
app.use((req, res, next) => {
console.log("Yendo a fyh")
    next()

})

app.get('/fyh', (req, res) => {
    const date = new Date
    res.json({fyh: date})
})

