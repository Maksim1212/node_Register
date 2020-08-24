const jwt = require('jsonwebtoken');
const AuthUserService = require('../components/Auth/service');
const { getJWTTokens } = require('../components/Auth/index');

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function isAuthJWT(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/v1/auth/401/');
    }
    let token = req.session.user.token.accessToken;
    const tokens = await getJWTTokens(req.session.user.id);
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_Access_Secret_KEY);
    } catch (error) {
        if (error.message === 'jwt expired') {
            const user = await AuthUserService.getUserByRefreshToken(req.session.user.token.refreshToken);
            req.session.user.token.accessToken = tokens.accessToken;
            token = req.session.user.token.accessToken;
            decoded = jwt.verify(token, process.env.JWT_Access_Secret_KEY);
            if (!user) {
                return res.redirect('/v1/auth/401/');
            }
        } else {
            return res.redirect('/v1/auth/401/');
        }
    }
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp > currentTime) {
        return next();
    }
    return res.status(200);
}



module.exports = {
    isAuthJWT,
};
