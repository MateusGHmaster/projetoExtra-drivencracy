import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export let database = null;

export function mongoConnection () {

    const mongoClient = new MongoClient(process.env.MONGO_URL);
    mongoClient.connect().then(() => {

        database = mongoClient.db('Drivencracy');

    }).catch((e) => {

        console.log(e);

    });

}
