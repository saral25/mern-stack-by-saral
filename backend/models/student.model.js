const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: String,
    batch: String,
    branch: String
})

const student = mongoose.model('studentDetails', studentSchema)

module.exports = student 