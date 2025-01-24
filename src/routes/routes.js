import  Router  from 'express';
import loginController from '../controllers/loginController.js';
import indexController from '../controllers/indexController.js';

const router =  Router();

router.get('/', indexController);

router.post('/api/login', loginController);

router.post('api/signup');

export default router;