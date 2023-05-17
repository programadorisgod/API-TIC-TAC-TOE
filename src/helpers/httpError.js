class CustomError extends Error {
  constructor (statusCode, message) {
    super(message)
    this.statusCode = statusCode
    this.name = this.constructor.name
  }
}

const httpError = (err, res) => {
  let statusCode = 500
  let message = 'Internal server error'
  // Si es un error personalizado, se establece el código de estado y el mensaje apropiados
  if (err instanceof CustomError) {
    statusCode = err.statusCode
    message = err.message
  }
  // Si es un error de sintaxis (por ejemplo, JSON no válido), se establece un código de estado 400
  if (err instanceof SyntaxError) {
    statusCode = 400
    message = 'Invalid JSON'
  }
  res.status(statusCode).json({ message, type: err.name })
}
module.exports = { httpError }
