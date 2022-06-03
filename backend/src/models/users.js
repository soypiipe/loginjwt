const { Schema, model } = require('mongoose')

const userSchema = new Schema({
   name: String,
   email: String,
   username: String,
   password: String
})

userSchema.set('toJSON', {
   transform: (document, returnedObject) => {
     returnedObject._id = returnedObject._id.toString()
     delete returnedObject.__v
   }
 })

module.exports =  model('Users', userSchema)