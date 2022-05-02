import { connection } from '../db/connection';

import { Request, Response } from 'express';
/**
 * Get application information.
 *
 * @returns {AppInformation}
 */
export async function insertPizzaFlavours(req: Request) {
  try {
    const con = await connection();
    con.connect();
    const databasesList = await con.db().collection('pizzaria');
    let response = await databasesList.insertOne({
      testeBanco: 'teste1',
    });
    await con.close();
    return response;
  } catch (error) {
    console.log(error);
  }
}
