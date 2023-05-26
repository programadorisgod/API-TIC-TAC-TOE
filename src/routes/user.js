const express = require('express')

const routerUser = express.Router()
const path = '/api/user'
const { getUser, createUser } = require('../controlles/user')

routerUser.get(`${path}/:id`, getUser)
routerUser.post(`${path}`, createUser)

module.exports = routerUser
