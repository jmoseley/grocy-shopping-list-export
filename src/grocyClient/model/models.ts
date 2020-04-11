export * from "./apiKey";
export * from "./battery";
export * from "./batteryChargeCycleEntry";
export * from "./batteryDetailsResponse";
export * from "./chore";
export * from "./choreDetailsResponse";
export * from "./choreLogEntry";
export * from "./currentBatteryResponse";
export * from "./currentChoreResponse";
export * from "./currentStockResponse";
export * from "./currentVolatilStockResponse";
export * from "./dbChangedTimeResponse";
export * from "./exposedEntity";
export * from "./exposedEntityButNoListing";
export * from "./externalBarcodeLookupResponse";
export * from "./genericErrorResponse";
export * from "./inlineObject";
export * from "./inlineObject1";
export * from "./inlineObject10";
export * from "./inlineObject11";
export * from "./inlineObject12";
export * from "./inlineObject13";
export * from "./inlineObject14";
export * from "./inlineObject15";
export * from "./inlineObject16";
export * from "./inlineObject17";
export * from "./inlineObject18";
export * from "./inlineObject19";
export * from "./inlineObject2";
export * from "./inlineObject3";
export * from "./inlineObject4";
export * from "./inlineObject5";
export * from "./inlineObject6";
export * from "./inlineObject7";
export * from "./inlineObject8";
export * from "./inlineObject9";
export * from "./inlineResponse200";
export * from "./inlineResponse2001";
export * from "./inlineResponse2002";
export * from "./inlineResponse200GrocyVersion";
export * from "./location";
export * from "./missingLocalizationRequest";
export * from "./product";
export * from "./productDetailsResponse";
export * from "./productPriceHistory";
export * from "./quantityUnit";
export * from "./recipeFulfillmentResponse";
export * from "./session";
export * from './shoppingList';
export * from "./shoppingListItem";
export * from "./stockEntry";
export * from "./stockLocation";
export * from "./stockLogEntry";
export * from "./stockTransactionType";
export * from "./task";
export * from "./user";
export * from "./userDto";
export * from "./userSetting";

import localVarRequest = require("request");

import { ApiKey } from "./apiKey";
import { Battery } from "./battery";
import { BatteryChargeCycleEntry } from "./batteryChargeCycleEntry";
import { BatteryDetailsResponse } from "./batteryDetailsResponse";
import { Chore } from "./chore";
import { ChoreDetailsResponse } from "./choreDetailsResponse";
import { ChoreLogEntry } from "./choreLogEntry";
import { CurrentBatteryResponse } from "./currentBatteryResponse";
import { CurrentChoreResponse } from "./currentChoreResponse";
import { CurrentStockResponse } from "./currentStockResponse";
import { CurrentVolatilStockResponse } from "./currentVolatilStockResponse";
import { DbChangedTimeResponse } from "./dbChangedTimeResponse";
import { ExposedEntity } from "./exposedEntity";
import { ExposedEntityButNoListing } from "./exposedEntityButNoListing";
import { ExternalBarcodeLookupResponse } from "./externalBarcodeLookupResponse";
import { GenericErrorResponse } from "./genericErrorResponse";
import { InlineObject } from "./inlineObject";
import { InlineObject1 } from "./inlineObject1";
import { InlineObject10 } from "./inlineObject10";
import { InlineObject11 } from "./inlineObject11";
import { InlineObject12 } from "./inlineObject12";
import { InlineObject13 } from "./inlineObject13";
import { InlineObject14 } from "./inlineObject14";
import { InlineObject15 } from "./inlineObject15";
import { InlineObject16 } from "./inlineObject16";
import { InlineObject17 } from "./inlineObject17";
import { InlineObject18 } from "./inlineObject18";
import { InlineObject19 } from "./inlineObject19";
import { InlineObject2 } from "./inlineObject2";
import { InlineObject3 } from "./inlineObject3";
import { InlineObject4 } from "./inlineObject4";
import { InlineObject5 } from "./inlineObject5";
import { InlineObject6 } from "./inlineObject6";
import { InlineObject7 } from "./inlineObject7";
import { InlineObject8 } from "./inlineObject8";
import { InlineObject9 } from "./inlineObject9";
import { InlineResponse200 } from "./inlineResponse200";
import { InlineResponse2001 } from "./inlineResponse2001";
import { InlineResponse2002 } from "./inlineResponse2002";
import { InlineResponse200GrocyVersion } from "./inlineResponse200GrocyVersion";
import { Location } from "./location";
import { MissingLocalizationRequest } from "./missingLocalizationRequest";
import { Product } from "./product";
import { ProductDetailsResponse } from "./productDetailsResponse";
import { ProductPriceHistory } from "./productPriceHistory";
import { QuantityUnit } from "./quantityUnit";
import { RecipeFulfillmentResponse } from "./recipeFulfillmentResponse";
import { Session } from "./session";
import { ShoppingList } from "./shoppingList";
import { ShoppingListItem } from "./shoppingListItem";
import { StockEntry } from "./stockEntry";
import { StockLocation } from "./stockLocation";
import { StockLogEntry } from "./stockLogEntry";
import { StockTransactionType } from "./stockTransactionType";
import { Task } from "./task";
import { User } from "./user";
import { UserDto } from "./userDto";
import { UserSetting } from "./userSetting";

/* tslint:disable:no-unused-variable */
let primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
  "any"
];

let enumsMap: { [index: string]: any } = {
  "Chore.PeriodTypeEnum": Chore.PeriodTypeEnum,
  "Chore.AssignmentTypeEnum": Chore.AssignmentTypeEnum,
  ExposedEntity: ExposedEntity,
  ExposedEntityButNoListing: ExposedEntityButNoListing,
  StockTransactionType: StockTransactionType
};

let typeMap: { [index: string]: any } = {
  ApiKey: ApiKey,
  Battery: Battery,
  BatteryChargeCycleEntry: BatteryChargeCycleEntry,
  BatteryDetailsResponse: BatteryDetailsResponse,
  Chore: Chore,
  ChoreDetailsResponse: ChoreDetailsResponse,
  ChoreLogEntry: ChoreLogEntry,
  CurrentBatteryResponse: CurrentBatteryResponse,
  CurrentChoreResponse: CurrentChoreResponse,
  CurrentStockResponse: CurrentStockResponse,
  CurrentVolatilStockResponse: CurrentVolatilStockResponse,
  DbChangedTimeResponse: DbChangedTimeResponse,
  ExternalBarcodeLookupResponse: ExternalBarcodeLookupResponse,
  GenericErrorResponse: GenericErrorResponse,
  InlineObject: InlineObject,
  InlineObject1: InlineObject1,
  InlineObject10: InlineObject10,
  InlineObject11: InlineObject11,
  InlineObject12: InlineObject12,
  InlineObject13: InlineObject13,
  InlineObject14: InlineObject14,
  InlineObject15: InlineObject15,
  InlineObject16: InlineObject16,
  InlineObject17: InlineObject17,
  InlineObject18: InlineObject18,
  InlineObject19: InlineObject19,
  InlineObject2: InlineObject2,
  InlineObject3: InlineObject3,
  InlineObject4: InlineObject4,
  InlineObject5: InlineObject5,
  InlineObject6: InlineObject6,
  InlineObject7: InlineObject7,
  InlineObject8: InlineObject8,
  InlineObject9: InlineObject9,
  InlineResponse200: InlineResponse200,
  InlineResponse2001: InlineResponse2001,
  InlineResponse2002: InlineResponse2002,
  InlineResponse200GrocyVersion: InlineResponse200GrocyVersion,
  Location: Location,
  MissingLocalizationRequest: MissingLocalizationRequest,
  Product: Product,
  ProductDetailsResponse: ProductDetailsResponse,
  ProductPriceHistory: ProductPriceHistory,
  QuantityUnit: QuantityUnit,
  RecipeFulfillmentResponse: RecipeFulfillmentResponse,
  Session: Session,
  ShoppingList: ShoppingList,
  ShoppingListItem: ShoppingListItem,
  StockEntry: StockEntry,
  StockLocation: StockLocation,
  StockLogEntry: StockLogEntry,
  Task: Task,
  User: User,
  UserDto: UserDto,
  UserSetting: UserSetting
};

export class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string) {
    if (data == undefined) {
      return expectedType;
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType;
    } else if (expectedType === "Date") {
      return expectedType;
    } else {
      if (enumsMap[expectedType]) {
        return expectedType;
      }

      if (!typeMap[expectedType]) {
        return expectedType; // w/e we don't know the type
      }

      // Check the discriminator
      let discriminatorProperty = typeMap[expectedType].discriminator;
      if (discriminatorProperty == null) {
        return expectedType; // the type does not have a discriminator. use it.
      } else {
        if (data[discriminatorProperty]) {
          var discriminatorType = data[discriminatorProperty];
          if (typeMap[discriminatorType]) {
            return discriminatorType; // use the type given in the discriminator
          } else {
            return expectedType; // discriminator did not map to a type
          }
        } else {
          return expectedType; // discriminator was not present (or an empty string)
        }
      }
    }
  }

  public static serialize(data: any, type: string) {
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index in data) {
        let date = data[index];
        transformedData.push(ObjectSerializer.serialize(date, subType));
      }
      return transformedData;
    } else if (type === "Date") {
      return data.toISOString();
    } else {
      if (enumsMap[type]) {
        return data;
      }
      if (!typeMap[type]) {
        // in case we dont know the type
        return data;
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type);

      // get the map for the correct type.
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      let instance: { [index: string]: any } = {};
      for (let index in attributeTypes) {
        let attributeType = attributeTypes[index];
        instance[attributeType.baseName] = ObjectSerializer.serialize(
          data[attributeType.name],
          attributeType.type
        );
      }
      return instance;
    }
  }

  public static deserialize(data: any, type: string) {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index in data) {
        let date = data[index];
        transformedData.push(ObjectSerializer.deserialize(date, subType));
      }
      return transformedData;
    } else if (type === "Date") {
      return new Date(data);
    } else if (type.indexOf('|') !== -1) {
      // Sort types with least number of keys first, to increase the liklihood of finding the correct type.
      const candidateTypes = type.split('|').map(t => t.trim()).sort((a, b) => {
        const aAttributes = typeMap[a].getAttributeTypeMap() as any[];
        const bAttributes = typeMap[b].getAttributeTypeMap() as any[];

        return aAttributes.length - bAttributes.length
      });
      const dataKeys = Object.keys(data);
      let matchingType: string | undefined = undefined;
      for (const candidateType of candidateTypes) {
        if (!typeMap[candidateType]) {
          // Unknown type
          continue;
        }
        const typeKeys = (typeMap[candidateType].getAttributeTypeMap() as { baseName: string }[]).map((attribute) => attribute.baseName);
        let keysMatch = true;
        for (const dataKey of dataKeys) {
          if (!typeKeys.includes(dataKey)) {
            keysMatch = false;
            break;
          }
        }
        if (keysMatch) {
          matchingType = candidateType;
          break;
        }
      }

      if (!matchingType) {
        // don't know the type
        return data;
      }
      let instance = new typeMap[matchingType]();
      let attributeTypes = typeMap[matchingType].getAttributeTypeMap();
      for (let index in attributeTypes) {
        let attributeType = attributeTypes[index];
        instance[attributeType.name] = ObjectSerializer.deserialize(
          data[attributeType.baseName],
          attributeType.type
        );
      }
      return instance;
    } else {
      if (enumsMap[type]) {
        // is Enum
        return data;
      }

      if (!typeMap[type]) {
        // dont know the type
        return data;
      }
      let instance = new typeMap[type]();
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      for (let index in attributeTypes) {
        let attributeType = attributeTypes[index];
        instance[attributeType.name] = ObjectSerializer.deserialize(
          data[attributeType.baseName],
          attributeType.type
        );
      }
      return instance;
    }
  }
}

export interface Authentication {
  /**
   * Apply authentication settings to header and query params.
   */
  applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
  public username: string = "";
  public password: string = "";

  applyToRequest(requestOptions: localVarRequest.Options): void {
    requestOptions.auth = {
      username: this.username,
      password: this.password
    };
  }
}

export class HttpBearerAuth implements Authentication {
  public accessToken: string | (() => string) = "";

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      const accessToken =
        typeof this.accessToken === "function"
          ? this.accessToken()
          : this.accessToken;
      requestOptions.headers["Authorization"] = "Bearer " + accessToken;
    }
  }
}

export class ApiKeyAuth implements Authentication {
  public apiKey: string = "";

  constructor(private location: string, private paramName: string) { }

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (this.location == "query") {
      (<any>requestOptions.qs)[this.paramName] = this.apiKey;
    } else if (
      this.location == "header" &&
      requestOptions &&
      requestOptions.headers
    ) {
      requestOptions.headers[this.paramName] = this.apiKey;
    } else if (
      this.location == "cookie" &&
      requestOptions &&
      requestOptions.headers
    ) {
      if (requestOptions.headers["Cookie"]) {
        requestOptions.headers["Cookie"] +=
          "; " + this.paramName + "=" + encodeURIComponent(this.apiKey);
      } else {
        requestOptions.headers["Cookie"] =
          this.paramName + "=" + encodeURIComponent(this.apiKey);
      }
    }
  }
}

export class OAuth implements Authentication {
  public accessToken: string = "";

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
    }
  }
}

export class VoidAuth implements Authentication {
  public username: string = "";
  public password: string = "";

  applyToRequest(_: localVarRequest.Options): void {
    // Do nothing
  }
}

export type Interceptor = (
  requestOptions: localVarRequest.Options
) => Promise<void> | void;
