import { Router } from 'express';
import { choicePostController, choiceGetController } from '../controllers/choiceController.js';
import validChoiceSchema from '../middlewares/validChoiceSchema.js';

const choiceRouter = Router();

choiceRouter.post('/choice', validChoiceSchema, choicePostController);
choiceRouter.post('/poll/:id/vote', validChoiceSchema, choicePostController);
choiceRouter.get('/poll/:id/choice', choiceGetController);

export default choiceRouter;