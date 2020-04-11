export * from "./batteriesApi";
import { BatteriesApi } from "./batteriesApi";
export * from "./calendarApi";
import { CalendarApi } from "./calendarApi";
export * from "./choresApi";
import { ChoresApi } from "./choresApi";
export * from "./filesApi";
import { FilesApi } from "./filesApi";
export * from "./genericEntityInteractionsApi";
import { GenericEntityInteractionsApi } from "./genericEntityInteractionsApi";
export * from "./recipesApi";
import { RecipesApi } from "./recipesApi";
export * from "./stockApi";
import { StockApi } from "./stockApi";
export * from "./stockByBarcodeApi";
import { StockByBarcodeApi } from "./stockByBarcodeApi";
export * from "./systemApi";
import { SystemApi } from "./systemApi";
export * from "./tasksApi";
import { TasksApi } from "./tasksApi";
export * from "./userManagementApi";
import { UserManagementApi } from "./userManagementApi";
export * from "./userSettingsApi";
import { UserSettingsApi } from "./userSettingsApi";
import * as fs from "fs";
import * as http from "http";

export class HttpError extends Error {
  constructor(
    public response: http.IncomingMessage,
    public body: any,
    public statusCode?: number
  ) {
    super("HTTP request failed");
    this.name = "HttpError";
  }
}

export interface RequestDetailedFile {
  value: Buffer;
  options?: {
    filename?: string;
    contentType?: string;
  };
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [
  BatteriesApi,
  CalendarApi,
  ChoresApi,
  FilesApi,
  GenericEntityInteractionsApi,
  RecipesApi,
  StockApi,
  StockByBarcodeApi,
  SystemApi,
  TasksApi,
  UserManagementApi,
  UserSettingsApi
];
