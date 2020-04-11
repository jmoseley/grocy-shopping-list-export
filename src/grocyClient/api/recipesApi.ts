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

import localVarRequest = require("request");
import http = require("http");

/* tslint:disable:no-unused-locals */
import { GenericErrorResponse } from "../model/genericErrorResponse";
import { InlineObject15 } from "../model/inlineObject15";
import { RecipeFulfillmentResponse } from "../model/recipeFulfillmentResponse";

import {
  ObjectSerializer,
  Authentication,
  VoidAuth,
  Interceptor
} from "../model/models";
import {
  HttpBasicAuth,
  HttpBearerAuth,
  ApiKeyAuth,
  OAuth
} from "../model/models";

import { HttpError, RequestFile } from "./apis";

let defaultBasePath = "http://grocy.lan/api";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum RecipesApiApiKeys {
  ApiKeyAuth
}

export class RecipesApi {
  protected _basePath = defaultBasePath;
  protected _defaultHeaders: any = {};
  protected _useQuerystring: boolean = false;

  protected authentications = {
    default: <Authentication>new VoidAuth(),
    ApiKeyAuth: new ApiKeyAuth("header", "GROCY-API-KEY")
  };

  protected interceptors: Interceptor[] = [];

  constructor(basePath?: string);
  constructor(
    basePathOrUsername: string,
    password?: string,
    basePath?: string
  ) {
    if (password) {
      if (basePath) {
        this.basePath = basePath;
      }
    } else {
      if (basePathOrUsername) {
        this.basePath = basePathOrUsername;
      }
    }
  }

  set useQuerystring(value: boolean) {
    this._useQuerystring = value;
  }

  set basePath(basePath: string) {
    this._basePath = basePath;
  }

  set defaultHeaders(defaultHeaders: any) {
    this._defaultHeaders = defaultHeaders;
  }

  get defaultHeaders() {
    return this._defaultHeaders;
  }

  get basePath() {
    return this._basePath;
  }

  public setDefaultAuthentication(auth: Authentication) {
    this.authentications.default = auth;
  }

  public setApiKey(key: RecipesApiApiKeys, value: string) {
    (this.authentications as any)[RecipesApiApiKeys[key]].apiKey = value;
  }

  public addInterceptor(interceptor: Interceptor) {
    this.interceptors.push(interceptor);
  }

  /**
   *
   * @summary Get stock fulfillment information for all recipe
   */
  public async recipesFulfillmentGet(
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<RecipeFulfillmentResponse>;
  }> {
    const localVarPath = this.basePath + "/recipes/fulfillment";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.ApiKeyAuth.apiKey) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.ApiKeyAuth.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<RecipeFulfillmentResponse>;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            body = ObjectSerializer.deserialize(
              body,
              "Array<RecipeFulfillmentResponse>"
            );
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
  /**
   *
   * @summary Adds all missing products for the given recipe to the shopping list
   * @param recipeId A valid recipe id
   * @param inlineObject15
   */
  public async recipesRecipeIdAddNotFulfilledProductsToShoppinglistPost(
    recipeId: string,
    inlineObject15?: InlineObject15,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/recipes/{recipeId}/add-not-fulfilled-products-to-shoppinglist".replace(
        "{" + "recipeId" + "}",
        encodeURIComponent(String(recipeId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    let localVarFormParams: any = {};

    // verify required parameter 'recipeId' is not null or undefined
    if (recipeId === null || recipeId === undefined) {
      throw new Error(
        "Required parameter recipeId was null or undefined when calling recipesRecipeIdAddNotFulfilledProductsToShoppinglistPost."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(inlineObject15, "InlineObject15")
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.ApiKeyAuth.apiKey) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.ApiKeyAuth.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                resolve({ response: response, body: body });
              } else {
                reject(new HttpError(response, body, response.statusCode));
              }
            }
          });
        }
      );
    });
  }
  /**
   *
   * @summary Consumes all products of the given recipe
   * @param recipeId A valid recipe id
   */
  public async recipesRecipeIdConsumePost(
    recipeId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/recipes/{recipeId}/consume".replace(
        "{" + "recipeId" + "}",
        encodeURIComponent(String(recipeId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    let localVarFormParams: any = {};

    // verify required parameter 'recipeId' is not null or undefined
    if (recipeId === null || recipeId === undefined) {
      throw new Error(
        "Required parameter recipeId was null or undefined when calling recipesRecipeIdConsumePost."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.ApiKeyAuth.apiKey) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.ApiKeyAuth.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                resolve({ response: response, body: body });
              } else {
                reject(new HttpError(response, body, response.statusCode));
              }
            }
          });
        }
      );
    });
  }
  /**
   *
   * @summary Get stock fulfillment information for the given recipe
   * @param recipeId A valid recipe id
   */
  public async recipesRecipeIdFulfillmentGet(
    recipeId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: RecipeFulfillmentResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/recipes/{recipeId}/fulfillment".replace(
        "{" + "recipeId" + "}",
        encodeURIComponent(String(recipeId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'recipeId' is not null or undefined
    if (recipeId === null || recipeId === undefined) {
      throw new Error(
        "Required parameter recipeId was null or undefined when calling recipesRecipeIdFulfillmentGet."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.ApiKeyAuth.apiKey) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.ApiKeyAuth.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: RecipeFulfillmentResponse;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            body = ObjectSerializer.deserialize(
              body,
              "RecipeFulfillmentResponse"
            );
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
}