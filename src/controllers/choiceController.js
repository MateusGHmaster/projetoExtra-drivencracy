import { database } from '../mongoDb.js';
import choiceSchema from '../schemas/choiceSchema.js';
import dayjs from 'dayjs';

export async function choiceController(req, res) {

    const { title, poolId  } = req.body;

    try {

        const choice = await database.collection('choices').findOne({ poolId });

        if (choice) {

            console.log(choice);
            return res.sendStatus(404);

        }

        const newPool = await database.collections('choices').insertOne({ poolId: poolId._id });

        if (dayjs().isAfter(expireAt.date)) {

            return res.sendStatus(403);

        }

        res.sendStatus(201);

    } catch (e) {

        console.log(e);

    }

}