import { database } from '../mongoDb.js';

export async function resultController ( req,res ) {
    
    const { _id } = req.params;

    try {
        
        const result = await database.collection('choices').findOne({ _id }).toArray();
        

        return res.send(result);

    } catch (e) {

        return res.status(500).send(e);

    }

}