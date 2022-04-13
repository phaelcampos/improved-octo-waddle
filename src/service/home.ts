import {
  getPizzaFlavour,
  insertPizzaFlavours,
  editPizzaFlavours,
  deletePizzaFlavours,
} from '@/db/pizzaFlavour';
import {
  editPizzaFlavourInterface,
  pizzaFlavoursInterface,
  deletePizzaFlavourInterface,
} from '@/interfaces/pizzaFlavoursInterface';
/**
 * Get application information.
 *
 * @returns {AppInformation}
 */
export async function insertPizzaFlavour(Pizza: pizzaFlavoursInterface) {
  try {
    let flavourOnDB = await getPizzaFlavour(Pizza.flavour);
    if (flavourOnDB) {
      return {
        body: 'This pizza flavour is already registered on the system',
        statusCode: 400,
      };
    }
    await insertPizzaFlavours(Pizza);
    return {
      body: 'This pizza was added to the system',
      statusCode: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function editPizzaFlavour(Pizza: editPizzaFlavourInterface) {
  try {
    let flavourOnDB = await getPizzaFlavour(Pizza.oldFlavour);
    if (!flavourOnDB) {
      return {
        body: 'This pizza flavour does not exist on our system',
        statusCode: 400,
      };
    }
    await editPizzaFlavours(Pizza);
    return {
      body: 'This pizza was edited',
      statusCode: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function deletePizzaFlavour(Pizza: deletePizzaFlavourInterface) {
  try {
    let flavourOnDB = await getPizzaFlavour(Pizza.flavour);
    if (!flavourOnDB) {
      return {
        body: 'This pizza flavour does not exist on our system',
        statusCode: 400,
      };
    }
    await deletePizzaFlavours(Pizza);
    return {
      body: 'This pizza was delete from the system',
      statusCode: 200,
    };
  } catch (error) {
    console.log(error);
  }
}
