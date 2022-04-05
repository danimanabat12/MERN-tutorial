const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require,d: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    // To add other stuff. Oks lang. 
    // name: {
    //     type: String,
    //     required: [true, 'Please add a name']
    // }
}, {
    Timestamps: true
})

// Export nato ang model, ang model name is User.
module.exports = mongoose.model('User', userSchema)