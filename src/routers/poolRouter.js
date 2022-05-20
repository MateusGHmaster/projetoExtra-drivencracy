import { Router } from 'express';
import { poolController } from '../controllers/poolController.js';
import validPoolSchema from '../middlewares/validPoolSchema.js';

const poolRouter = Router();

poolRouter.post('/poll', validPoolSchema, poolController);
poolRouter.get('/poll', poolController);

export default poolRouter;