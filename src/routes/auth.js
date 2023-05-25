const express = require('express')
const { Login } = require('../controlles/auth')
const routerAuth = express.Router()
const path = '/api/auth'

routerAuth.post(`${path}/login`, Login)

module.exports = routerAuth
