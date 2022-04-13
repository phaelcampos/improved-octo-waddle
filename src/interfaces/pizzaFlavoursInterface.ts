/**
 * Application Information response strucuture.
 */
interface pizzaFlavoursInterface {
  flavour: string;
  price: number;
}

/**
 * Application Information response strucuture.
 */
interface editPizzaFlavourInterface {
  newFlavour: string;
  oldFlavour: string;
  price: number;
}

interface deletePizzaFlavourInterface {
  flavour: string;
}

export {
  pizzaFlavoursInterface,
  editPizzaFlavourInterface,
  deletePizzaFlavourInterface,
};
