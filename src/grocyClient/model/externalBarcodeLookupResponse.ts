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

export class ExternalBarcodeLookupResponse {
  "name"?: string;
  "locationId"?: number;
  "quIdPurchase"?: number;
  "quIdStock"?: number;
  "quFactorPurchaseToStock"?: number;
  /**
   * Can contain multiple barcodes separated by comma
   */
  "barcode"?: string;
  /**
   * The id of the added product, only included when the producted was added to the database
   */
  "id"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "name",
      baseName: "name",
      type: "string"
    },
    {
      name: "locationId",
      baseName: "location_id",
      type: "number"
    },
    {
      name: "quIdPurchase",
      baseName: "qu_id_purchase",
      type: "number"
    },
    {
      name: "quIdStock",
      baseName: "qu_id_stock",
      type: "number"
    },
    {
      name: "quFactorPurchaseToStock",
      baseName: "qu_factor_purchase_to_stock",
      type: "number"
    },
    {
      name: "barcode",
      baseName: "barcode",
      type: "string"
    },
    {
      name: "id",
      baseName: "id",
      type: "number"
    }
  ];

  static getAttributeTypeMap() {
    return ExternalBarcodeLookupResponse.attributeTypeMap;
  }
}
