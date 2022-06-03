const User = require('../models/users')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const bcrypt = require('bcrypt')

// login
const login = async (req, res) =>{
    
    //username and password from request
    const { username, password } = req.body

    // find user by username
    const user = await User.findOne({ username })

    //password check
    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(password, user.password)

    // if password is correct
    if(!passwordCorrect || !user){
        res.status(401).json({
            error: 'invalid user or password'
        })
    }

    const userForToken = {
        id: user._id.toString(),
        username: user.username
    }
    
    // create token
    const token = jwt.sign(userForToken, config.TOKEN_SECRET)

    res.json({
        name: user.name,
        username: user.username,
        token
    })
}

module.exports = {
    login
}