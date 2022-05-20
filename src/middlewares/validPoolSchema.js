import poolSchema from '../schemas/poolSchema.js';

export default function validPoolSchema (req, res, next) {

    const pool = req.body;

    const isValidPool = poolSchema.validate(pool, { abortEarly: false });
    
    if (isValidPool.error) {

        return res.status(422).send(isValidPool.error);

    }

    next();

}