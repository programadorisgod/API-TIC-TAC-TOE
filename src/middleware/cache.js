// Requriendo el modulo de express-expeditious para poder usar la cache en express
const getExpeditiousCache = require('express-expeditious')
// importamos redis, ya que sera nuestro alamacen de datos en memoria
const redis = require('redis')
// creamos el cliente de redis para poder usarlo en el motor de cache
const cliente = redis.createClient({ port: 6379 })
// creamos las opciones de cache
const defaultOptions = {
  // key de la cache
  namespace: 'expresscache',
  // tiempo de vida de la cache
  defaultTtl: '2 minute',
  // motor de cache
  engine: require('expeditious-engine-redis')({
    cliente
  }),
  // codigo de estado de la respuestas
  statusCodeExpires: {
    404: '5 minutes',
    500: 0
  }
}

const cache = getExpeditiousCache(defaultOptions)

module.exports = { cache }
