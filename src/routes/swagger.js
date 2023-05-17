
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API TIC TAC TOE',
      version: '1.0.0',
      description: 'API para el juego TIC TAC TOE'
    },
    servers: [
      {
        url: 'http://localhost:3306'
      }
    ]
  },
  apis: ['./src/routes/*.js']
}

const swaggerSpec = swaggerJsDoc(options)

// funcion para stupid swagger

const swaggerDocs = (app, port) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  }
  )
  console.log(`Swagger disponible en http://localhost:${port}/api-docs`)
}

module.exports = { swaggerDocs }
