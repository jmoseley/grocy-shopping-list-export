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

export class StockEntry {
  "id"?: number;
  "productId"?: number;
  "locationId"?: number;
  "amount"?: number;
  "bestBeforeDate"?: string;
  "purchasedDate"?: string;
  /**
   * A unique id which references this stock entry during its lifetime
   */
  "stockId"?: string;
  "price"?: number;
  "open"?: number;
  "openedDate"?: string;
  "rowCreatedTimestamp"?: Date;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "id",
      baseName: "id",
      type: "number"
    },
    {
      name: "productId",
      baseName: "product_id",
      type: "number"
    },
    {
      name: "locationId",
      baseName: "location_id",
      type: "number"
    },
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
      name: "purchasedDate",
      baseName: "purchased_date",
      type: "string"
    },
    {
      name: "stockId",
      baseName: "stock_id",
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
      type: "number"
    },
    {
      name: "openedDate",
      baseName: "opened_date",
      type: "string"
    },
    {
      name: "rowCreatedTimestamp",
      baseName: "row_created_timestamp",
      type: "Date"
    }
  ];

  static getAttributeTypeMap() {
    return StockEntry.attributeTypeMap;
  }
}
