const router = require('express-promise-router')();
const {checkJWTSign} = require('../middlewares/jwtCheck.middleware')
const { auth } = require('../controllers');


router.route('/login').post(auth.login);
router.route('/signup').post(auth.signUP);
router.route('/refresh').post(checkJWTSign,auth.refreshToken);
router.route('/logout').post(auth.logout);



module.exports = router;