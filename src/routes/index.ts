import express, { Router } from 'express';
import homeRouter from './home';
import userRouter from './user';

const appRouter: Router = express.Router();

appRouter.use('/', homeRouter);
appRouter.use('/users', userRouter);

export default appRouter;

