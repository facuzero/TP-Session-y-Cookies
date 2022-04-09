const express = require('express')
const path = require('path')
const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"src/views"))
/* MIDDLEWARES */

app.use(express.static(path.join(__dirname,"./public")))
app.use(express.json())
app.use(express.urlencoded({extended: false}))


/* ENRUTADORES */

const mainRouter = require('./src/routes/main')

/* RUTAS */
app.use('/', mainRouter)

const PORT =3000
app.listen(PORT,()=>console.log(`
    Puerto levantado
    http://localhost:${PORT}`))