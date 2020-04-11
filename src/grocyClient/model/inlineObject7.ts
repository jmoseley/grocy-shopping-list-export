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
import { StockTransactionType } from "./stockTransactionType";

export class InlineObject7 {
  /**
   * The amount to remove - please note that when tare weight handling for the product is enabled, this needs to be the amount including the container weight (gross), the amount to be posted will be automatically calculated based on what is in stock and the defined tare weight
   */
  "amount"?: number;
  "transactionType"?: StockTransactionType;
  /**
   * True when the given product was spoiled, defaults to false
   */
  "spoiled"?: boolean;
  /**
   * A specific stock entry id to consume, if used, the amount has to be 1
   */
  "stockEntryId"?: string;
  /**
   * A valid recipe id for which this product was used (for statistical purposes only)
   */
  "recipeId"?: number;
  /**
   * A valid location id (if supplied, only stock at the given location is considered, if ommitted, stock of any location is considered)
   */
  "locationId"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "amount",
      baseName: "amount",
      type: "number"
    },
    {
      name: "transactionType",
      baseName: "transaction_type",
      type: "StockTransactionType"
    },
    {
      name: "spoiled",
      baseName: "spoiled",
      type: "boolean"
    },
    {
      name: "stockEntryId",
      baseName: "stock_entry_id",
      type: "string"
    },
    {
      name: "recipeId",
      baseName: "recipe_id",
      type: "number"
    },
    {
      name: "locationId",
      baseName: "location_id",
      type: "number"
    }
  ];

  static getAttributeTypeMap() {
    return InlineObject7.attributeTypeMap;
  }
}
