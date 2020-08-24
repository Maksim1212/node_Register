const AuthUserModel = require('../Auth/model');

/**
 * Find user by id
 * @exports
 * @method findOne
 * @param {string} email
 * @summary find user
 * @returns {Promise<void>}
 */
function findUser(email) {
    return AuthUserModel.findOne({ email }).exec();
}

/**
 * Login user
 * @exports
 * @method login
 * @param {string} email
 * @param {string} password
 * @summary login user
 * @returns {Promise<void>}
 */
function login(email, password) {
    return AuthUserModel.login(email, password);
}

/**
 * Logout user
 * @exports
 * @method logout
 * @param {string} _id
 * @param {string} refreshToken
 * @summary logout user
 * @returns {Promise<void>}
 */
function logout(_id, refreshToken) {
    return AuthUserModel.updateOne({ _id }, { refreshToken }).exec();
}

/**
 * Create new user
 * @exports
 * @method create
 * @param {object} profile
 * @summary create user
 * @returns {Promise<void>}
 */
function createUser(profile) {
    return AuthUserModel.create(profile);
}

/**
 * Get user AccesToken
 * @exports
 * @method updateOne
 * @param {string} _id
 * @param {string} accesToken
 * @summary getAccessToken user
 * @returns {Promise<void>}
 */
function getAccesToken(_id, accesToken) {
    return AuthUserModel.updateOne({ _id }, { accesToken }).exec();
}

/**
 * Update user RefreshToken
 * @exports
 * @method updateOne
 * @param {string} _id
 * @param {string} refreshToken
 * @summary update RefreshToken
 * @returns {Promise<void>}
 */
function updateRefreshToken(_id, refreshToken) {
    return AuthUserModel.updateOne({ _id }, { refreshToken }).exec();
}

/**
 * Get user ByRefreshToken
 * @exports
 * @method findOne
 * @param {string} refreshToken
 * @summary get user ByRefreshToken
 * @returns {Promise<void>}
 */
function getUserByRefreshToken(refreshToken) {
    return AuthUserModel.findOne({ refreshToken }).exec();
}

/**
 * Delete user by id
 * @exports
 * @method deleteOne
 * @param {string} _id
 * @summary Delete user by id
 * @returns {Promise<void>}
 */
function deleteUserById(_id) {
    return AuthUserModel.deleteOne({ _id }).exec();
}
module.exports = {
    // register,
    createUser,
    findUser,
    getAccesToken,
    login,
    logout,
    updateRefreshToken,
    getUserByRefreshToken,
    deleteUserById,
};
