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

export class InlineObject {
  /**
   * The amount to add - please note that when tare weight handling for the product is enabled, this needs to be the amount including the container weight (gross), the amount to be posted will be automatically calculated based on what is in stock and the defined tare weight
   */
  "amount"?: number;
  /**
   * The best before date of the product to add, when omitted, the current date is used
   */
  "bestBeforeDate"?: string;
  /**
   * The price per purchase quantity unit in configured currency
   */
  "price"?: number;
  /**
   * If the stock entry was already opened or not
   */
  "open"?: boolean;
  /**
   * If omitted, the default location of the product is used
   */
  "locationId"?: number;
  /**
   * The date when this stock entry was purchased
   */
  "purchasedDate"?: string;

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
      name: "bestBeforeDate",
      baseName: "best_before_date",
      type: "string"
    },
    {
      name: "price",
      baseName: "price",
      type: "number"
    },
    {
      name: "open",
      baseName: "open",
      type: "boolean"
    },
    {
      name: "locationId",
      baseName: "location_id",
      type: "number"
    },
    {
      name: "purchasedDate",
      baseName: "purchased_date",
      type: "string"
    }
  ];

  static getAttributeTypeMap() {
    return InlineObject.attributeTypeMap;
  }
}
