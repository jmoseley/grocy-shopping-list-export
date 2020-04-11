import { getConfig } from "./config";
import { GenericEntityInteractionsApi, GenericEntityInteractionsApiApiKeys } from "./grocyClient/api/apis";
import { ExposedEntityButNoListing } from "./grocyClient/api";

async function main() {
    try {
        console.log(`Loading shopping list.`);
        const config = getConfig();

        const exposedEntityClient = new GenericEntityInteractionsApi();
        exposedEntityClient.setApiKey(GenericEntityInteractionsApiApiKeys.ApiKeyAuth, config.grocyApiKey);

        const shoppingLists = await exposedEntityClient.objectsEntityGet(ExposedEntityButNoListing.ShoppingLists);

        console.log(`Shopping Lists`, shoppingLists);
    } catch (error) {
        console.error(`Error!`, error);
    }
}

main();