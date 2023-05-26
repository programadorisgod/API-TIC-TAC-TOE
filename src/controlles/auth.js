const { Sing } = require('../helpers/generateToken')
const { User } = require('../models/user')
const Login = async (req, res) => {
  const { email, password } = req.body

  try {
    await User.sync()
    const user = await User.findOne({ where: { email, password } })
    console.log(user)
    if (!user) {
      res.status(400).json({ message: 'User not found' })
      return
    }
    const token = await Sing()
    res.status(200).send({ token })
  } catch (error) {

  }
}

module.exports = { Login }
