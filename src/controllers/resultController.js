import { database } from '../mongoDb.js';

export async function resultController ( req,res ) {
    
    try {
        
        const result = await database.collection('choices').find().toArray();

        return res.send(result);

    } catch (e) {

        return res.status(500).send(e);

    }

}