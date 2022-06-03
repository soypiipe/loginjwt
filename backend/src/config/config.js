require('dotenv').config()

const PORT = process.env.PORT || 3000
const ENV = process.env.ENV || "DEV"
const TOKEN_SECRET = process.env.TOKEN_SECRET
const DB_HOST = process.env.DB_HOST || "localhost"
const DB_NAME = process.env.DB_NAME || "test"
const SALT_ROUNT = process.env.SALT_ROUNT || 5

module.exports = {
    PORT,
    ENV,
    TOKEN_SECRET,
    DB_HOST,
    DB_NAME,
    SALT_ROUNT
}