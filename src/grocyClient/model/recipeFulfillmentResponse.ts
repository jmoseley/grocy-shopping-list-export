/**
 * grocy REST API
 * Authentication is done via API keys (header *GROCY-API-KEY* or same named query parameter), which you can manage [here](https://demo.grocy.info/manageapikeys).<br>Additionally requests from within the frontend are also valid (via session cookie).
 *
 * The version of the OpenAPI document: 2.6.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from "../api";

export class RecipeFulfillmentResponse {
  "recipeId"?: number;
  "needFulfilled"?: boolean;
  "needFulfilledWithShoppingList"?: boolean;
  "missingProductsCount"?: number;
  "costs"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "recipeId",
      baseName: "recipe_id",
      type: "number"
    },
    {
      name: "needFulfilled",
      baseName: "need_fulfilled",
      type: "boolean"
    },
    {
      name: "needFulfilledWithShoppingList",
      baseName: "need_fulfilled_with_shopping_list",
      type: "boolean"
    },
    {
      name: "missingProductsCount",
      baseName: "missing_products_count",
      type: "number"
    },
    {
      name: "costs",
      baseName: "costs",
      type: "number"
    }
  ];

  static getAttributeTypeMap() {
    return RecipeFulfillmentResponse.attributeTypeMap;
  }
}