const { Schema } = require('mongoose');
const connections = require('../../config/connection');

const UserSchema = new Schema({
    last_name: {
        type: String,
        trim: true
    },
    first_name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
        require: false,
    },
}, {
    collection: 'authUserModel',
    versionKey: false,
}, );

module.exports = connections.model('AuthUserModel', UserSchema);