import poolSchema from '../schemas/poolSchema';

export default function validPoolSchema (req, res, next) {

    const pool = req.body;


    const isValidPool = poolSchema.validate(pool, { abortEarly: false });

    if (isValidPool.error) {

        return res.sendStatus(422);

    }

    next();

}