let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let classroom = new Schema({
    name: {type: String , required: true },
    school: {type: ObjectId , ref: "School" , required: true},
    teachers: { type: Schema.Types.ObjectId, 
        ref: "Teacher" , virtual: true}
})







module.exports = mongoose.model('Classroom' , classroom)