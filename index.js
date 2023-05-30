const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const app = express()

const router = require('./src/routes/winners')
const PORT = process.env.PORT || 3300
const { swaggerDocs } = require('./src/routes/swagger')
const routerAuth = require('./src/routes/auth')
const routerUser = require('./src/routes/user')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)
app.use(routerAuth)
app.use(routerUser)

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`)
  swaggerDocs(app, PORT)
})
