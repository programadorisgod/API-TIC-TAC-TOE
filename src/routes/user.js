const express = require('express')

const routerUser = express.Router()
const path = '/api/user'
const { getUser, createUserx } = require('../controlles/user')

routerUser.get(`${path}/:id`, getUser)
routerUser.post(`${path}/create`, createUserx)

module.exports = routerUser
