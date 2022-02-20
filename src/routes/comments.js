const router = require('express-promise-router')();
const {comment} = require('../controllers');
const {checkJWTSign} = require('../middlewares/jwtCheck.middleware')

router.route('/').post(comment.create);
router.route('/').get(comment.getAll);


module.exports = router;