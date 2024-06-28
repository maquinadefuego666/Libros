const mongoose = require ('mongoose')//se declara la constante donde conectamos los datos a mongoose
const url_db = 'mongodb://localhost:27017/libreria'//conexion a la base 
mongoose.connect(url_db)
.then (() =>{//inicio de la promesa y verificacion de errores
    console.log('si jala')
})
.catch ((err) =>{//se pone err para cachar un error
    console.log('no jala')
})
const eschema_libros = new mongoose.Schema ({
    title:{
        type: String
    },
    autor:{
        type: String
    },
    anio:{
        type: Number
    },
    copias:{
        type: Number
    },
    genero:{
        type: String
    },
    impresora:{
        type: String
    },
    precio:{
        type: String
    }
})
const datos_libro = new mongoose.model('datos_libro', eschema_libros)
datos_libro.create({
    title:"El señor de los anillos",
    autor:"J.R.R. Tolkien",
    anio:"1954",
    copias:"2000",
    genero:"Ficcion",
    impresora:"Tinta.mx",
    precio:"700"
})
