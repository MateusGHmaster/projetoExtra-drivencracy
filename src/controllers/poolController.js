import dayjs from 'dayjs';
import { database } from '../mongoDb.js';

export async function poolGetController ( req,res ) {
    
    try {
        
        const pools = await database.collection('pools').find().toArray();

        return res.send(pools);

    } catch (e) {

        return res.status(500).send(e);

    }

}

export async function poolPostController ( req,res ) {

    const { title, expireAt } = req.body;

    let expires = expireAt;

    try {

        const checkPool = await database.collection('pools').findOne({ title });


        if (expires === '') {

            expires = dayjs().add(30, 'day').format('YYYY-MM-DD HH:mm');

        }

        if (!checkPool) {

            await database.collection('pools').insertOne({
    
                title,
                expireAt: expires
    
            }); 

        }

        return res.sendStatus(201);

    } catch (e) {

        return res.status(500).send(e);

    }

}