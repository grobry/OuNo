const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Studysheet (singular) information
//Defines the structure of the document saved
const studySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
    // ,
    // date: {
    //     type: Date,
    //     required: false
    // }
}, { timestamps: true })

 
module.exports = mongoose.model('Study', studySchema)