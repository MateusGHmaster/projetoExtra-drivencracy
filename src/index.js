import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { mongoConnection } from './mongoDb.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

const port = process.env.PORT || 5000;

app.listen(port, () => {

    mongoConnection();
    console.log('Drivencracy API is Running!');

});