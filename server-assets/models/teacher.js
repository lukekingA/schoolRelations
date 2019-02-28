let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let teacher = new Schema({
        name: {
                type: String,
                required: true
        },
        classroom: {
                type: ObjectId,
                ref: "Classroom",
                required: true
        },
        students: {
                type: ObjectId,
                ref: "Student",
                virtual: true
        }
})







module.exports = mongoose.model('Teacher', teacher)