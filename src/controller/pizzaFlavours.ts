import * as homeService from '@/service/home';
import { error } from 'console';

import { Request, Response } from 'express';

/**
 * Gets the API information.
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function insertPizzaFlavour(req: Request, res: Response) {
  const result = await homeService.insertPizzaFlavour(req.body);
  if ((result?.statusCode as number) >= 400) {
    res.statusCode = result?.statusCode as number;
  }
  res.json(result?.body);
}

export async function editPizzaFlavour(req: Request, res: Response) {
  const result = await homeService.editPizzaFlavour(req.body);
  if ((result?.statusCode as number) >= 400) {
    res.statusCode = result?.statusCode as number;
  }
  res.json(result?.body);
}

export async function deletePizzaFlavour(req: Request, res: Response) {
  const result = await homeService.deletePizzaFlavour(req.body);
  if ((result?.statusCode as number) >= 400) {
    res.statusCode = result?.statusCode as number;
  }
  res.json(result?.body);
}
