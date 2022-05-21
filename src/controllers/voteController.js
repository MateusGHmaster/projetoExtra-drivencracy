import { database } from '../mongoDb';

export async function voteController ( req,res ) {

    const { _id } = req.params;
    
    const voted = 0;

    try {

        const vote = await database.collection('votes').findOne({ _id });

        if (!vote) {

            return res.sendStatus(404);

        } else {

            voted += 1;

            await database.collection('votes').updateOne({ votes: voted }); 

        }

        return sendStatus(201);

    } catch (e) {

        console.log(e);

    }

}