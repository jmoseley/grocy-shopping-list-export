import { getConfig } from "./config";
import { GenericEntityInteractionsApi, GenericEntityInteractionsApiApiKeys } from "./grocyClient/api/apis";
import { ExposedEntityButNoListing, ShoppingList, ShoppingListItem, QuantityUnit, Product } from "./grocyClient/api";
import { GoogleKeepApi } from "./googleKeepApi/api";
import inquirer from 'inquirer';

async function main() {
    try {
        console.log(`Loading shopping list.`);
        const config = getConfig();

        const googleKeep = new GoogleKeepApi(config.googleUsername, config.googlePassword);
        const exposedEntityClient = new GenericEntityInteractionsApi();
        exposedEntityClient.setApiKey(GenericEntityInteractionsApiApiKeys.ApiKeyAuth, config.grocyApiKey);

        const qus = (await exposedEntityClient.objectsEntityGet(ExposedEntityButNoListing.QuantityUnits)).body as QuantityUnit[];
        const shoppingLists = (await exposedEntityClient.objectsEntityGet(ExposedEntityButNoListing.ShoppingLists)).body as ShoppingList[];
        if (shoppingLists.length === 0) {
            throw new Error('No shopping list found.');
        }
        const notes = await googleKeep.findNote('Groceries');
        if (notes.length === 0) {
            throw new Error(`No notes found.`);
        }

        let noteId: string | undefined = undefined;
        let shoppingListId: string | undefined = undefined;

        let questions = [];
        if (shoppingLists.length > 1) {
            questions.push({
                type: 'list',
                name: 'shoppingList',
                message: 'Which shopping list to export?',
                choices: shoppingLists.map(sl => ({ name: sl.name, value: sl.id })),
            })
        } else {
            shoppingListId = shoppingLists[0].id!.toString();
        }

        if (notes.length > 1) {
            questions.push({
                type: 'list',
                name: 'note',
                message: 'Which note to add to?',
                choices: notes.map(n => ({ name: n.title, value: n.id })),
            })
        } else {
            noteId = notes[0].id;
        }
        if (questions.length > 0) {
            const answers = await inquirer.prompt(questions);

            if (answers['shoppingList']) {
                shoppingListId = answers['shoppingList'] as string;
            }
            if (answers['note']) {
                noteId = answers['note'] as string;
            }
        }

        const allShoppingListItems = ((await exposedEntityClient.objectsEntityGet(ExposedEntityButNoListing.ShoppingListItems)).body as ShoppingListItem[]);
        const shoppingListItems = allShoppingListItems.filter(sli => sli.shoppingListId = shoppingListId);

        const items = (await Promise.all(shoppingListItems.map(async sli => {
            if (!sli.productId) {
                return null;
            }
            const product = (await exposedEntityClient.objectsEntityObjectIdGet(ExposedEntityButNoListing.Products, sli.productId)).body as Product;
            const qu = qus.find(qu => qu.id === product.quIdPurchase);
            return `${product.name} (${sli.amount} ${qu ? sli.amount! > 1 ? qu!.namePlural : qu!.name : ''})`.trim();
        }))).filter(item => !!item) as string[];

        const result = await googleKeep.addItems(noteId!, items);
        console.info(`Added ${result.itemsAdded} items to the list.`);
    } catch (error) {
        console.error(`Error!`, error);
    }
}

main();