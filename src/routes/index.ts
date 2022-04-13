import * as homeController from '@/controller/home';
import { querySchema } from '@/schemas/pizzaSchema';
const validator = require('express-joi-validation').createValidator({});
import { Router } from 'express';

const router = Router();

router.get('/teste', async (req, res) => {
  await homeController.getAppInfo(req, res);
});

router.post('/teste', validator.body(querySchema), async (req, res) => {
  await homeController.getAppInfo(req, res);
});

export default router;
