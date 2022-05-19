import Joi from 'joi';

const poolSchema = Joi.object({

    title: Joi.string().min(2).required(),
    expireAt: Joi.date().format('YYYY-MM-DD').utc()

});

export default poolSchema;