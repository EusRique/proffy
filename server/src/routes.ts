import express from 'express';
import ClassesController from './controller/ClassesController';
import ConnectionController from './controller/ConnectionController';

const routes = express.Router();
const classesControllers = new ClassesController;
const connectControllers = new ConnectionController;

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectControllers.index);
routes.post('/connections', connectControllers.create);

export default routes;