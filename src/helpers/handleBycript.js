const bcrypt = require('bcrypt')

const encrypt = async (textPlain) => {
  const has = await bcrypt.hash(textPlain, 10)
  return has
}

const comparePassword = async (textPlain, passwordHas) => {
  return await bcrypt.compare(textPlain, passwordHas)
}

module.exports = { encrypt, comparePassword }
