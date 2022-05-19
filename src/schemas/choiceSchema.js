import Joi from 'joi';

const choiceSchema = Joi.object({

    title: Joi.string().min(2).required(),
    poolId: Joi.string().required()

});

export default choiceSchema;