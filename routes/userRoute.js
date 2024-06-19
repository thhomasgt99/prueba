'use strict'

var express = require('express')
var user = require('../controllers/userController')

var api = express.Router()

// var multipart = require('connect-multiparty')
// var md_upload = multipart({uploadDir: './uploads/users'})

api.get('/', user.prueba)
// api.get('/getusers', user.getUsers)
api.post('/register', user.saveUser)

module.exports = api