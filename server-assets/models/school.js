let mongoose = require('mongoose')
let Schema = mongoose.Schema
let school = new Schema({
    name: {type: String , required: true },
    classrooms: { type: Schema.Types.ObjectId, 
        ref: "Knight" , virtual: true}
})







module.exports = mongoose.model('School' , school)