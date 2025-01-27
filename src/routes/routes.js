import  Router  from 'express';
import loginController from '../controllers/loginController.js';
import indexController from '../controllers/indexController.js';
import signupController from '../controllers/signupController.js';
import secureController from '../controllers/secureController.js';

const router =  Router();

router.get('/api', indexController);

router.post('/api/secure', secureController);

router.post('/api/login', loginController);

router.post('/api/signup', signupController);

export default router;