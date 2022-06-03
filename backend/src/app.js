const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

//routes
const userRouter = require('./routes/user')

const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', userRouter)

module.exports = app