import { createPizzaOrderInterface } from "@/interfaces/orders"; 
import { getPizzaFlavour } from "@/db/pizzaFlavour";

export async function createPizzaOrder(params:createPizzaOrderInterface) {
    const flavourExists = await getPizzaFlavour
}