import AppInformation from '@/types/response/AppInformation';
import CONFIG from '@/config';
import { connection } from '../db/connection';
/**
 * Get application information.
 *
 * @returns {AppInformation}
 */
export async function getAppInfo() {
  try {
    const con = await connection();
    con.connect();
    const databasesList = await con.db().collection('pizzaria');
    await databasesList.insertOne({
      teste1: 'teste1',
    });
    await con.close();
    return CONFIG.APP;
  } catch (error) {
    console.log(error);
  }
}
