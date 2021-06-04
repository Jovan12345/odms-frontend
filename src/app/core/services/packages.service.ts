import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Package } from '../interfaces/package.interface';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root',
})
export class PackagesService {
  serviceUrl: string;

  packages: Package[] = [];

  constructor(private http: HttpClient, private config: AppConfigService) {
    const {
      appVersion,
      api: { host, port, prefix },
    } = this.config.getConfig();
    this.serviceUrl = `${host}:${port}/${prefix}/${appVersion}`;
  }

  getPackages(): any {
    return this.http.get(this.serviceUrl + '/packages');
  }

  savePackage(newPackage: Package): any {
    this.http
      .post(this.serviceUrl + `/packages`, newPackage)
      .subscribe((response) => {
        console.log('Success post', response);
      });
  }
}
