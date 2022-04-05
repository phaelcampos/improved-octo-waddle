import * as homeService from '@/service/home';

import { Request, Response } from 'express';

/**
 * Gets the API information.
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function getAppInfo(req: Request, res: Response) {
  const result = homeService.getAppInfo();
  console.log(result);
  res.json({
    number: 1,
    name: 'John',
    gender: 'male',
  });
}
