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
import { Chore } from "./chore";
import { UserDto } from "./userDto";

export class ChoreDetailsResponse {
  "chore"?: Chore;
  /**
   * When this chore was last tracked
   */
  "lastTracked"?: Date;
  /**
   * How often this chore was tracked so far
   */
  "trackCount"?: number;
  "lastDoneBy"?: UserDto;
  "nextEstimatedExecutionTime"?: Date;
  "nextExecutionAssignedUser"?: UserDto;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "chore",
      baseName: "chore",
      type: "Chore"
    },
    {
      name: "lastTracked",
      baseName: "last_tracked",
      type: "Date"
    },
    {
      name: "trackCount",
      baseName: "track_count",
      type: "number"
    },
    {
      name: "lastDoneBy",
      baseName: "last_done_by",
      type: "UserDto"
    },
    {
      name: "nextEstimatedExecutionTime",
      baseName: "next_estimated_execution_time",
      type: "Date"
    },
    {
      name: "nextExecutionAssignedUser",
      baseName: "next_execution_assigned_user",
      type: "UserDto"
    }
  ];

  static getAttributeTypeMap() {
    return ChoreDetailsResponse.attributeTypeMap;
  }
}
