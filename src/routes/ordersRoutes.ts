const validator = require('express-joi-validation').createValidator({});
import { Router } from 'express';
import * as pizzaOrderController from '@/controller/orders';
import { createPizzaOrderSchema } from '@/schemas/orderSchema';
const ordersRoutes = Router();

ordersRoutes.put('/flavour', validator.body(createPizzaOrderSchema), async (req, res) => {
    await pizzaOrderController.createPizzaOrder(req, res);
  });
  