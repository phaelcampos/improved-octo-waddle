import * as homeController from '@/controller/home';

import { Router } from 'express';

const router = Router();

router.get('/teste', async (req, res) => {
  await homeController.getAppInfo(req, res);
});

router.post('/teste', async (req, res) => {
  await homeController.getAppInfo(req, res);
});

export default router;
