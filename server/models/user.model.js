const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters in length"],
        unique: [true, "Pet Name must be unique"],
    },
    petType: {
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be at least 3 characters in length"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "description must be at least 3 characters in length"],
    },
    skillOne: {
        type: String,
    },
    skillTwo: {
        type: String,
    },
    skillThree: {
        type: String,
    }
    


}, { timestamps: true });

UserSchema.plugin(uniqueValidator);

module.exports.User = mongoose.model('User', UserSchema);

