import CONFIG from '@/config';
import { connection } from '../db/connection';
import {
  pizzaFlavoursInterface,
  editPizzaFlavourInterface,
  deletePizzaFlavourInterface,
} from '@/interfaces/pizzaFlavoursInterface';
/**
 * Get application information.
 *
 * @returns {AppInformation}
 */
export async function insertPizzaFlavours(Pizza: pizzaFlavoursInterface) {
  try {
    const con = await connection();
    con.connect();
    const databasesList = await con.db().collection('pizzaria');
    await databasesList.insertOne(Pizza);
    await con.close();
    return;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Get application information.
 *
 * @returns {AppInformation}
 */
export async function getPizzaFlavour(PizzaFlavour: string) {
  try {
    const con = await connection();
    con.connect();
    const databasesList = await con.db().collection('pizzaria');
    console.log('pizzaflaivoir', PizzaFlavour);
    let result = await databasesList.findOne({ flavour: PizzaFlavour });
    console.log('resulta', result);
    await con.close();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function editPizzaFlavours(Pizza: editPizzaFlavourInterface) {
  try {
    const con = await connection();
    con.connect();
    const databasesList = await con.db().collection('pizzaria');
    await databasesList.findOneAndUpdate(
      { flavour: Pizza.oldFlavour },
      {
        $set: {
          flavour: Pizza.newFlavour,
          price: Pizza.price,
        },
      },
    );
    await con.close();
    return;
  } catch (error) {
    console.log(error);
  }
}

export async function deletePizzaFlavours(Pizza: deletePizzaFlavourInterface) {
  try {
    const con = await connection();
    con.connect();
    const databasesList = await con.db().collection('pizzaria');
    await databasesList.findOneAndDelete(Pizza);
    await con.close();
    return;
  } catch (error) {
    console.log(error);
  }
}
