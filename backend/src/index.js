const config = require("./config/config")
const app = require("./app")


const onServer = async () => {
    await app.listen(config.PORT)
    console.log(`Run server on port ${config.PORT}`)
}

onServer()