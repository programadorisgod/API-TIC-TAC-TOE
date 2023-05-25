const { Sing } = require('../helpers/generateToken')

const Login = async (req, res) => {
  const token = await Sing()
  console.log(token)
  res.status(200).json({ token })
}

module.exports = { Login }
