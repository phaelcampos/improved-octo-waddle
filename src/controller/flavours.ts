import * as pizzaFlavoursServices from '@/service/pizzaFlavoursServices';
import { Request, Response } from 'express';

/**
 * Gets the API information.
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function insertPizzaFlavours(req: Request, res: Response) {
  let flavour = {
      flavour: req.body.flavour,
      price: req.body.price
      }
    const result = await pizzaFlavoursServices.insertPizzaFlavours(flavour);

    console.log(result);
  res.json({
    number: 1,
    name: 'John',
    gender: 'male',
  });
}
