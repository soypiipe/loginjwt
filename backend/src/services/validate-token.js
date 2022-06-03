const jwt = require('jsonwebtoken')

const validateToken = (req, res, next) => {

    //get token from header
    const token = req.get('authorization').split(' ')[1]

    // check if token exists
    if(!token){
        return res.status(401).json({
            error: 'No token provided'
        })
    }

    try{
        // verify token
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = decoded
        next()
    }catch(err){
        return res.status(401).json({
            error: 'Token invalid'
        })
    }
}

module.exports = validateToken
