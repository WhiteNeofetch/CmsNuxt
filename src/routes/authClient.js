const router = require('express-promise-router')();
const {checkJWTSign} = require('../middlewares/jwtCheck.middleware')
const { authClient } = require('../controllers');


router.route('/login').post(authClient.login);
router.route('/signup').post(authClient.signUP);
router.route('/refresh').post(checkJWTSign,authClient.refreshToken);
router.route('/logout').post(authClient.logout);



module.exports = router;