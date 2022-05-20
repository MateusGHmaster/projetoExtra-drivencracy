import { Router } from 'express';
import { poolPostController, poolGetController } from '../controllers/poolController.js';
import validPoolSchema from '../middlewares/validPoolSchema.js';

const poolRouter = Router();

poolRouter.post('/poll', validPoolSchema, poolPostController);
poolRouter.get('/poll', poolGetController);

export default poolRouter;