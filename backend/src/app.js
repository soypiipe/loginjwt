const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const config = require('./config/config')

//routes

const app = express()

app.use(cors())
app.use(morgan(config.ENV))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

module.exports = app