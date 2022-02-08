require('dotenv').config()

const PORT = process.env.PORT || 3000
const ENV = process.env.ENV || "DEV"

module.exports = {
    PORT,
    ENV
}