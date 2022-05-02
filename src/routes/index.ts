// import * as homeController from '@/controller/home';
import * as pizzaFlavours from '@/controller/flavours';
import { Router } from 'express';
import {insertPizzaFlavours} from '@/schema/pizzaFlavours'
import {  ValidatedRequestSchema} from 'express-joi-validation'
const router = Router();

router.post('/api/pizza', async (req, res) => {
  await pizzaFlavours.insertPizzaFlavours(req, res);
});

// router.post('/teste', async (req, res) => {
//   await homeController.getAppInfo(req, res);
// });

export default router;
