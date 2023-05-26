const { ERROR_TYPE } = require('../helpers/dictionary')
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

const createUser = async (req, res) => {
  const { username, password, email } = req.body
  console.log(username, password, email)
  try {
    await User.sync()
    const userCreated = await User.create({ username, password, email })
    if (userCreated) {
      res.status(201).json({ message: 'User created successfully' })
      return
    }
  } catch (error) {
    httpError(error, res)
  }
}

module.exports = { getUser, createUser }
