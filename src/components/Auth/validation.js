const Validation = require('../validation');

class AuthUserValidation extends Validation {
    /**
     * @param {String} profile.email
     * @param {String} profile.fullName
     * @param {String} profile.password
     * @returns
     * @memberof AuthUserValidation
     */
    createUser(profile) {
        return this.Joi
            .object({
                last_name: this.Joi
                    .string()
                    .alphanum()
                    .min(1)
                    .max(30)
                    .required(),
                first_name: this.Joi
                    .string()
                    .alphanum()
                    .min(1)
                    .max(30)
                    .required(),
                email: this.Joi.string().min(6).max(36).email().required(),
                password: this.Joi
                    .string()
                    .min(5)
                    .max(18)
                    .required(),
                _csrf: this.Joi.string(),
            })
            .validate(profile);
    }

    /**
     * @param {String} data.email
     * @param {String} data.password
     * @returns
     * @memberof AuthUserValidation
     */

    login(data) {
        return this.Joi
            .object({
                email: this.Joi.string().email().required(),
                password: this.Joi.string().required(),
                _csrf: this.Joi.string(),
            })
            .validate(data);
    }

    /**
     * @param {String} data.refreshToken
     * @returns
     * @memberof AuthUserValidation
     */

    updateToken(data) {
        return this.Joi
            .object({
                refreshToken: this.Joi.string().required(),
            }).validate(data);
    }
}
module.exports = new AuthUserValidation();