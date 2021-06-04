export interface Package {
  PackageId: number;
  Barcode: string;
  ShipmentId: number;
  AccountId: string;
  DeliveryId: string;
  DateCreated: string;
  DateRecieved: string;
  DateOutForDelivery: string;
  DateDelivered: string;
  DateCancelled: string;
  Weight: string;
  Length: boolean;
  Height: boolean;
  Width: boolean;
  LocationId: string;
  ContainerId: string;
  StatusSubmitted: boolean;
  StatusRecieved: boolean;
  StatusReadyForDelivery: boolean;
  StatusOutForDelivery: boolean;
  StatusDeliveryError: boolean;
  StatusDelivered: boolean;
  StatusDisposed: boolean;
  StatusCancelled: boolean;
}
