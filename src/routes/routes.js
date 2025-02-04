import  Router  from 'express';
import loginController from '../controllers/loginController.js';
import indexController from '../controllers/indexController.js';
import signupController from '../controllers/signupController.js';
import secureController from '../controllers/secureController.js';
import requestController from '../controllers/requestController.js';
import requestsController from '../controllers/requestsController.js';
import scheduleController from '../controllers/scheduleController.js';
import statusController from '../controllers/statusController.js';

const router =  Router();

router.get('/api', indexController);

router.post('/api/secure', secureController);

router.post('/api/login', loginController);

router.post('/api/signup', signupController);

router.post('/api/request', requestController);

router.get('/api/requests', requestsController);

router.put('/api/schedule', scheduleController);

router.post('/api/status', statusController);
export default router;