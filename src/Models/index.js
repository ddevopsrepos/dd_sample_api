const mongoose = require('mongoose')
const validator = require('validator')


const TestingSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: [true, "email already exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email')
            }
        }
    },
    phone: {
        type: Number,
        require: true,
        min: 11
    }
})

const Testing = new mongoose.model('testing', TestingSchema)
module.exports = Testing