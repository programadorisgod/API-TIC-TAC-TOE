const { Sing } = require('../helpers/generateToken')
const { comparePassword } = require('../helpers/handleBycript')
const { httpError } = require('../helpers/httpError')
const { User } = require('../models/user')
const Login = async (req, res) => {
  const { email, password } = req.body

  try {
    await User.sync()
    const user = await User.findAll({ where: { email } })

    if (!user) {
      res.status(400).json({ message: 'User not found' })
      return
    }

    const has = await comparePassword(password, user[0].dataValues.password)

    if (!has) {
      res.status(409).json({ error: 'password invalid' })
      return
    }

    const token = await Sing()
    res.status(200).send({ token })
  } catch (error) {
    httpError(error, res)
  }
}

module.exports = { Login }
