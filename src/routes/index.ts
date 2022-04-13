import * as homeController from '@/controller/pizzaFlavours';
import {
  insertPizzaFlavour,
  editPizzaFlavour,
  deletePizzaFlavour,
} from '@/schemas/pizzaSchema';
const validator = require('express-joi-validation').createValidator({});
import { Router } from 'express';

const router = Router();

router.put('/flavour', validator.body(editPizzaFlavour), async (req, res) => {
  await homeController.editPizzaFlavour(req, res);
});

router.post(
  '/flavour',
  validator.body(insertPizzaFlavour),
  async (req, res) => {
    await homeController.insertPizzaFlavour(req, res);
  },
);

router.delete(
  '/flavour',
  validator.body(deletePizzaFlavour),
  async (req, res) => {
    await homeController.deletePizzaFlavour(req, res);
  },
);

export default router;
