
const { ERROR_TYPE } = require('../helpers/dictionary')
const { Verify } = require('../helpers/generateToken')

const CheckAuth = async (req, res, next) => {
  try {
    // miro si en la cabecera vien la autorizacion
    const authorization = req.get('authorization')

    let token

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.split(' ').pop()
    }
    // ahora verificamos el token
    const tokenData = await Verify(token)

    if (tokenData.foo) {
      next()
    }
  } catch (error) {
    res.status(409).send({ error: ERROR_TYPE.authorization })
  }
}

module.exports = { CheckAuth }
