import express from 'express';
import * as teacherController from '../controllers/teacherCntroller';


const teacherRouter = express.Router();

teacherRouter.post('/register', teacherController.registerStudent);

export default teacherRouter;