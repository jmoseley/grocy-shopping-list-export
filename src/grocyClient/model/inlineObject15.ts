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

export class InlineObject15 {
  /**
   * An optional array of product ids to exclude them from being put on the shopping list
   */
  "excludedProductIds"?: Array<number>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "excludedProductIds",
      baseName: "excludedProductIds",
      type: "Array<number>"
    }
  ];

  static getAttributeTypeMap() {
    return InlineObject15.attributeTypeMap;
  }
}
