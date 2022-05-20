import Joi from 'joi';

const poolSchema = Joi.object({

    title: Joi.string().min(2).required(),
    expireAt: Joi.string().allow(null, '')

});

export default poolSchema;