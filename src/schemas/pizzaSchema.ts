import Joi from 'joi';

const insertPizzaFlavour = Joi.object({
  flavour: Joi.string().required(),
  price: Joi.number().required(),
});

const editPizzaFlavour = Joi.object({
  oldFlavour: Joi.string().required(),
  newFlavour: Joi.string(),
  price: Joi.number().required(),
});

const deletePizzaFlavour = Joi.object({
  flavour: Joi.string().required(),
});

export { insertPizzaFlavour, editPizzaFlavour, deletePizzaFlavour };
