'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var	UserSchema = Schema({
	text:String,
	select:String,
	opciones:Array
})

module.exports = mongoose.model('User', UserSchema)