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

export class Battery {
  "id"?: number;
  "name"?: string;
  "description"?: string;
  "usedIn"?: string;
  "chargeIntervalDays"?: number;
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
      name: "name",
      baseName: "name",
      type: "string"
    },
    {
      name: "description",
      baseName: "description",
      type: "string"
    },
    {
      name: "usedIn",
      baseName: "used_in",
      type: "string"
    },
    {
      name: "chargeIntervalDays",
      baseName: "charge_interval_days",
      type: "number"
    },
    {
      name: "rowCreatedTimestamp",
      baseName: "row_created_timestamp",
      type: "Date"
    }
  ];

  static getAttributeTypeMap() {
    return Battery.attributeTypeMap;
  }
}
