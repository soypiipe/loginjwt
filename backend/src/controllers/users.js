const User = require('../models/users')
const bcrypt = require('bcrypt')
const config = require('../config/config') 

// register a new user
const register = async (req, res) => {
    const { name, email, username, password } = req.body
    
    // password encryption
    const passwordHash = await bcrypt.hash(password, parseInt(config.SALT_ROUNT))

    try{

        // create user
        const newUser = new User({
            name,
            email,
            username,
            password: passwordHash
        })
        
        await newUser.save()
        
        res.status(201).json({message: 'insert!'})
    }catch(err){
        res.status(500).send(err)
    }
}

// get all users
const getAll = async (req, res) => {
    try{
        // find all users
        const users = await User.find({})
        res.json({
            status: true,
            data: users
        })
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports = {
    register,
    getAll
}