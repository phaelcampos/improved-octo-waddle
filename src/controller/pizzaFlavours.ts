import * as pizzaFlavourService from '@/service/pizzaFlavourServices';
import { error } from 'console';

import { Request, Response } from 'express';

/**
 * Gets the API information.
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function insertPizzaFlavour(req: Request, res: Response) {
  const result = await pizzaFlavourService.insertPizzaFlavour(req.body);
  if ((result?.statusCode as number) >= 400) {
    res.statusCode = result?.statusCode as number;
  }
  res.json(result?.body);
}

export async function editPizzaFlavour(req: Request, res: Response) {
  const result = await pizzaFlavourService.editPizzaFlavour(req.body);
  if ((result?.statusCode as number) >= 400) {
    res.statusCode = result?.statusCode as number;
  }
  res.json(result?.body);
}

export async function deletePizzaFlavour(req: Request, res: Response) {
  const result = await pizzaFlavourService.deletePizzaFlavour(req.body);
  if ((result?.statusCode as number) >= 400) {
    res.statusCode = result?.statusCode as number;
  }
  res.json(result?.body);
}
