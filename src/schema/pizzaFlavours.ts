import Joi from "joi";

const insertPizzaFlavours = Joi.object({
    flavour: Joi.string().min(3).max(30).required(),
    price: Joi.number().required()
});

export {insertPizzaFlavours}