import choiceSchema from '../schemas/choiceSchema';

export default function validChoicelSchema (req, res, next) {

    const choice = req.body;

    const isValidChoice = choiceSchema.validate(choice, { abortEarly: false });

    if (isValidChoice.error) {

        return res.sendStatus(422);

    }

    next();

}