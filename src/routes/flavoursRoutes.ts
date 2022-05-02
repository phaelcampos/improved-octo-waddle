import * as pizzaFlavourController from '@/controller/pizzaFlavours';
import {
  insertPizzaFlavour,
  editPizzaFlavour,
  deletePizzaFlavour,
} from '@/schemas/pizzaSchema';
const validator = require('express-joi-validation').createValidator({});
import { Router } from 'express';

const flavoursRoutes = Router();

flavoursRoutes.put('/flavour', validator.body(editPizzaFlavour), async (req, res) => {
  await pizzaFlavourController.editPizzaFlavour(req, res);
});

flavoursRoutes.post('/flavour',validator.body(insertPizzaFlavour), async (req, res) => {
    await pizzaFlavourController.insertPizzaFlavour(req, res);
  },
);

flavoursRoutes.delete('/flavour',validator.body(deletePizzaFlavour),
  async (req, res) => {
    await pizzaFlavourController.deletePizzaFlavour(req, res);
  },
);

export default flavoursRoutes;
