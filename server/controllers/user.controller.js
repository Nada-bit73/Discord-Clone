const { User } = require('../models/user.model');


module.exports.createUser = (request, response) => {
    const { name , petType , description , skillOne , skillTwo , skillThree } = request.body;
    User.create({
        name , petType , description , skillOne , skillTwo , skillThree 
    })
        .then(user => response.json(user))
        .catch(err => response.status(400).json(err))
}


module.exports.getAllUsers = (request, response) => {
    User.find({}).sort([['petType', 'ascending']])
        .then(users => response.json(users))
        .catch(err => response.json(err))
}


module.exports.getUser = (request, response) => {
    User.findOne({ _id: request.params.id })
        .then(user => response.json(user))
        .catch(err => response.json(err))
}


module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate(
        { _id: request.params.id },
        request.body
    )
        .then(updatedUser => response.json(updatedUser))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}







