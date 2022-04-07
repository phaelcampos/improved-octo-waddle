import { connection } from '../db/connection';

import { Request, Response } from 'express';
import { pizzaFlavours } from '@/interfaces/pizzaFlavours';
/**
 * Get application information.
 *
 * @returns {AppInformation}
 */
export async function insertPizzaFlavours(req: pizzaFlavours) {
  try {
    
    const con = await connection();
    con.connect();
    const databasesList = await con.db().collection('pizzaria');
    let response = await databasesList.insertOne({
      flavour:req.flavour,
      price:req.price
    });
    await con.close();
    return response;

  } catch (error) {
    console.log(error);
  }
}
