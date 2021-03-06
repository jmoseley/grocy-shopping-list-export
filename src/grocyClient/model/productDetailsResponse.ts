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
import { Location } from "./location";
import { Product } from "./product";
import { QuantityUnit } from "./quantityUnit";

export class ProductDetailsResponse {
  "product"?: Product;
  "quantityUnitPurchase"?: QuantityUnit;
  "quantityUnitStock"?: QuantityUnit;
  "lastPurchased"?: string;
  "lastUsed"?: Date;
  "stockAmount"?: number;
  "stockAmountOpened"?: number;
  "nextBestBeforeDate"?: Date;
  "lastPrice"?: number;
  "location"?: Location;
  "averageShelfLifeDays"?: number;
  "spoilRatePercent"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "product",
      baseName: "product",
      type: "Product"
    },
    {
      name: "quantityUnitPurchase",
      baseName: "quantity_unit_purchase",
      type: "QuantityUnit"
    },
    {
      name: "quantityUnitStock",
      baseName: "quantity_unit_stock",
      type: "QuantityUnit"
    },
    {
      name: "lastPurchased",
      baseName: "last_purchased",
      type: "string"
    },
    {
      name: "lastUsed",
      baseName: "last_used",
      type: "Date"
    },
    {
      name: "stockAmount",
      baseName: "stock_amount",
      type: "number"
    },
    {
      name: "stockAmountOpened",
      baseName: "stock_amount_opened",
      type: "number"
    },
    {
      name: "nextBestBeforeDate",
      baseName: "next_best_before_date",
      type: "Date"
    },
    {
      name: "lastPrice",
      baseName: "last_price",
      type: "number"
    },
    {
      name: "location",
      baseName: "location",
      type: "Location"
    },
    {
      name: "averageShelfLifeDays",
      baseName: "average_shelf_life_days",
      type: "number"
    },
    {
      name: "spoilRatePercent",
      baseName: "spoil_rate_percent",
      type: "number"
    }
  ];

  static getAttributeTypeMap() {
    return ProductDetailsResponse.attributeTypeMap;
  }
}
