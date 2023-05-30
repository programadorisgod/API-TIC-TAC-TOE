const { ERROR_TYPE } = require('../helpers/dictionary')
const { encrypt } = require('../helpers/handleBycript')
const { httpError } = require('../helpers/httpError')
const { User } = require('../models/user')

const getUser = async (req, res) => {
  const { id } = req.params
  try {
    await User.sync()
    const user = await User.findOne({ where: { id } })
    if (!user) {
      res.status(400).json({ message: ERROR_TYPE.notFound })
      return
    }
    res.status(200).json(user)
  } catch (error) {
    console.log('hola')
    httpError(error, res)
  }
}

const createUserx = async (req, res) => {
  const { username, password, email } = req.body
  console.log(req.body)
  try {
    await User.sync()

    const hasPasword = await encrypt(password)

    const userCreated = await User.create({ username, password: hasPasword, email })

    if (userCreated) {
      res.status(201).json({ message: 'User created successfully' })
      return
    }
  } catch (error) {
    httpError(error, res)
  }
}

module.exports = { getUser, createUserx }
