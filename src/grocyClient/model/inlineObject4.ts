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

export class InlineObject4 {
  /**
   * The new current amount for the given product - please note that when tare weight handling for the product is enabled, this needs to be the amount including the container weight (gross), the amount to be posted will be automatically calculated based on what is in stock and the defined tare weight
   */
  "newAmount"?: number;
  /**
   * The best before date which applies to added products
   */
  "bestBeforeDate"?: string;
  /**
   * If omitted, the default location of the product is used (only applies to added products)
   */
  "locationId"?: number;
  /**
   * If omitted, the last price of the product is used (only applies to added products)
   */
  "price"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "newAmount",
      baseName: "new_amount",
      type: "number"
    },
    {
      name: "bestBeforeDate",
      baseName: "best_before_date",
      type: "string"
    },
    {
      name: "locationId",
      baseName: "location_id",
      type: "number"
    },
    {
      name: "price",
      baseName: "price",
      type: "number"
    }
  ];

  static getAttributeTypeMap() {
    return InlineObject4.attributeTypeMap;
  }
}
