const { Router } = require('express');
const csrf = require('csurf');
const AuthUserComponent = require('../Auth');
const Auth = require('../../polices/isAuth');

const csrfProtection = csrf({ cookie: true });

/**
 * Express router to auth user related functions on.
 * @type {Express.Router}
 * @const
 */
const authUserRouter = Router();

/**
 * Route get user login page
 * @name /v1/auth/login
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
authUserRouter.get('/login', csrfProtection, AuthUserComponent.loginPage);

/**
 * Route post user login action
 * @name /v1/auth/login
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
authUserRouter.post('/login', csrfProtection, AuthUserComponent.login);

/**
 * Route get user logout action
 * @name /v1/auth/logout
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
authUserRouter.get('/logout', AuthUserComponent.logout);

/**
 * Route get not authorized user 401 page
 * @name /v1/auth/401
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
authUserRouter.get('/401', AuthUserComponent.anauthorized);

/**
 * Route get user register page
 * @name /v1/auth/register
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
authUserRouter.get('/register', csrfProtection, AuthUserComponent.register);

/**
 * Route post create new user
 * @name /v1/auth/createUser
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
authUserRouter.post('/createUser', csrfProtection, AuthUserComponent.createUser);

/**
 * Route post update user JWT token
 * @name /v1/auth/login
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
authUserRouter.post('/updateToken', Auth.isAuthJWT);

authUserRouter.get('/index', AuthUserComponent.indexPage);

module.exports = authUserRouter;
