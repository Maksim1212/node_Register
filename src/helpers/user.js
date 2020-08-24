function getUserMainFields(user) {
    const { last_name, first_name, email, _id } = user;
    return {
        _id,
        email,
        last_name,
        first_name,
    };
}

module.exports = {
    getUserMainFields,
};
