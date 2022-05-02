import { List } from "lodash";

/**
 * Application Information response strucuture.
 */
 interface createPizzaOrderInterface {
    pizzaFlavour: Array<String>;
    totalPrice: number;
    status: string;
    additional: Array<string>
  }

export {
    createPizzaOrderInterface,
  };
  