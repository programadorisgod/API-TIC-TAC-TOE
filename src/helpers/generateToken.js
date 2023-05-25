const jwt = require('jsonwebtoken')
const { JWT_KEY } = process.env

const Sing = async () => {
  return jwt.sign(
    {
      foo: 'bar'
    },
    JWT_KEY,
    {
      expiresIn: '1h'
    }
  )
}

const Verify = async (token) => {
  try {
    return jwt.verify(token, JWT_KEY)
  } catch (error) {
    return null
  }
}

module.exports = { Sing, Verify }
