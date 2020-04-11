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

export class User {
  "id"?: number;
  "username"?: string;
  "firstName"?: string;
  "lastName"?: string;
  "password"?: string;
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
      name: "username",
      baseName: "username",
      type: "string"
    },
    {
      name: "firstName",
      baseName: "first_name",
      type: "string"
    },
    {
      name: "lastName",
      baseName: "last_name",
      type: "string"
    },
    {
      name: "password",
      baseName: "password",
      type: "string"
    },
    {
      name: "rowCreatedTimestamp",
      baseName: "row_created_timestamp",
      type: "Date"
    }
  ];

  static getAttributeTypeMap() {
    return User.attributeTypeMap;
  }
}
