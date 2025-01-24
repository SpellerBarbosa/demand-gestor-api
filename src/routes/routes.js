import Router from 'express';
import loginController from '../controllers/loginController.js';

const router =  Router();

router.get('/');

router.post('/api/login', loginController);