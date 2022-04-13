import Joi from 'joi';

const querySchema = Joi.object({
  pizza: Joi.string().required(),
});

export { querySchema };
