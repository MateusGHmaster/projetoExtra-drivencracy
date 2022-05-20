import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { mongoConnection } from './mongoDb.js';
import poolRouter from './routers/poolRouter.js';
import choiceRouter from './routers/choiceRouter.js';
import resultRouter from './routers/resultRouter.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.use(poolRouter);
app.use(choiceRouter);
app.use(resultRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {

    mongoConnection();
    console.log('Drivencracy API is Running!');

});