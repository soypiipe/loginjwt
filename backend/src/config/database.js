const config = require('./config')
const mongoose = require('mongoose')


const connection = async() =>{
    try{
        console.log('Connecting to database...')
        await mongoose.connect(`mongodb://${config.DB_HOST}:27017/${config.DB_NAME}`)
    }catch(err){
        console.log(`error database ${err}`)
    }
} 

connection()