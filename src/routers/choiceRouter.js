import { Router } from 'express';
import { choiceController } from '../controllers/choiceController.js';
import validChoiceSchema from '../middlewares/validChoiceSchema.js';

const choiceRouter = Router();

choiceRouter.post('/choice', validChoiceSchema, choiceController);
choiceRouter.post('/poll/:id/vote', validChoiceSchema, choiceController);
choiceRouter.get('/poll/:id/choice', validChoiceSchema, choiceController);

export default choiceRouter;