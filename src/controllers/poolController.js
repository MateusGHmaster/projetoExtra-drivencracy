import { database } from '../mongoDb';

export async function poolController ( req,res ) {

    const pool = req.body;

    try {

        const inputPool = await database.collection('pools').insertOne(pool);

        if (!inputPool) {

            return res.sendStatus(422);

        }

        return sendStatus(201);

    } catch (e) {

        console.log(e);

    }

}