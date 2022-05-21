import { database } from '../mongoDb.js';
import choiceSchema from '../schemas/choiceSchema.js';
import dayjs from 'dayjs';

export async function choiceGetController(req, res) {

    const { _id } = req.params;

    try {
        
        const choices = await database.collection('choices').find({ _id }).toArray();

        return res.send(choices);

    } catch (e) {

        return res.status(500).send(e);

    }

}

export async function choicePostController(req, res) {

    const { _id, title, expireAt  } = req.body;

    const currentDate = new Date();

    try {

        const choice = await database.collection('choices').findOne({ _id });
        const choiceTitle = await database.collection('choices').findOne({ title });

        if (!choice) {

            return res.sendStatus(404);

        } 

        if (expireAt < currentDate) {

            return res.sendStatus(403);

        }
        
        if (!choiceTitle){

            await database.collection('choices').insertOne({
    
                title,
                poolId: _id
    
            });

        } 
        
        if (choiceTitle) {

            return res.sendStatus(409);

        }

        res.sendStatus(201);

    } catch (e) {

        console.log(e);

    }

}