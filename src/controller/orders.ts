import { error } from 'console';
import * as orderService from '@/service/orderServices'
import { Request, Response } from 'express';


/**
 * Gets the API information.
 *
 * @param {Request} req
 * @param {Response} res
 */
 export async function createPizzaOrder(req: Request, res: Response) {
    const result = await orderService.createPizzaOrder(req.body);

  }