import Joi from 'joi';

const createPizzaOrderSchema = Joi.object({
  flavour: Joi.string().required(),
  price: Joi.number().required(),
});


export { createPizzaOrderSchema };
