import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {
  serviceUrl: string;

  constructor( private http: HttpClient, private config: AppConfigService) {
    const {
      appVersion,
      api: { host, port, prefix },
    } = this.config.getConfig();
    this.serviceUrl = `${host}:${port}/${prefix}/${appVersion}`;
  }

  getShipments(): any {
    return this.http.get(this.serviceUrl + '/shipments')
  }
}
