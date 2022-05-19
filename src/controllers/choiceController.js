import { database } from '../mongoDb.js';

export async function choiceController(req, res) {

    const { title, poolId  } = req.body;

    try {

    const choice = await database.collection('choices').findOne({ poolId });

    if (!choice) {

        console.log(choice);
        return res.sendStatus(404);

    }

/*     if (expiredAt) {

        res.sendStatus(403);

    } */

    res.sendStatus(201);

    } catch (e) {

        console.log(e);

    }

}