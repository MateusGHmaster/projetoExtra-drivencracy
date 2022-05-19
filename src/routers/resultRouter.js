import { Router } from 'express';

const resultRouter = Router();

resultRouter.get('/poll/:id/result');

export default resultRouter;