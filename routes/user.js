const express = require('express');
const reqReceivedLogger = require('../middlewares/reqReceivedLogger');
const { userValidator, adminValidator } = require('../middlewares/utils/validators');

const { getUsers,
        deleteUsers,
        postUser,
        getUser,
        deleteUser,
        updateUser,
        login,
        forgotPassword,
        updatePassword,
        logout,
        resetPassword } = require('../controllers/userController');
const protectedRoute = require('../middlewares/auth');


const router = express.Router();


router.route('/')
      .get(reqReceivedLogger, protectedRoute, adminValidator, getUsers)
      .post(reqReceivedLogger, userValidator, postUser)
      .delete(reqReceivedLogger, protectedRoute, adminValidator, deleteUsers)

router.route('/login')
      .post(reqReceivedLogger, login)

router.route('/forgotpassword')
      .post(reqReceivedLogger, forgotPassword)

router.route('/resetpassword')
      .put(reqReceivedLogger, resetPassword)

router.route('/updatepassword')
      .put(reqReceivedLogger, protectedRoute, updatePassword)

router.route('/logout')
      .get(reqReceivedLogger, protectedRoute, logout)

router.route('/:userId')
      .get(reqReceivedLogger, getUser)
      .put(reqReceivedLogger, protectedRoute, updateUser)
      .delete(reqReceivedLogger, protectedRoute, deleteUser)

module.exports = router;