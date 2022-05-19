import { database } from '../mongoDb';
import poolSchema from '../schemas/poolSchema';
import dayjs from 'dayjs';

export async function voteController ( req,res ) {

    try {

        const vote = await database.collection('votes').findOne(vote);

        if (!vote) {

            return res.sendStatus(404);

        }

        if (dayjs().isAfter(expireAt.date)) {

            return res.sendStatus(403);

        }

        return sendStatus(201);

    } catch (e) {

        console.log(e);

    }

}