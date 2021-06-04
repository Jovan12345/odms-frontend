export interface Shipment {
  ShimpentId: number;
  ExternalShipmentId: number;
  ClientShipmentId: string;
  AccountId: string;
  DateCreated: string;
  DateOutForDelivery: string;
  DateDelivered: string;
  ServiceLevel: string;
  DeliverByDate: string;
  Origin: string;
  AddressName: string;
  AddressLine1: string;
  AddressLine2: string;
  AddressNotes: string;
  AddressCity: string;
  AddressState?: any;
  AddressZIP: string;
  AddressPhone: string;
  Packages: string;
  StatusSubmitted: boolean;
  StatusPartiallyRecived: boolean;
  StatusRecived: boolean;
  StatusOutForDelivery: string;
  StatusDelivered: boolean;
  StatusDeliveryError: boolean;
  StatusCancelled: boolean;
}
