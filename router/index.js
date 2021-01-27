const Router = require('koa-router');
import {findUser} from '../controller/test1'

const router = new Router({
	prefix: '/api'
})

router.get('/', findUser)

module.exports = router;