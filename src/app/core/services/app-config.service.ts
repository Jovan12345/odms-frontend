import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private config: any;

  constructor(private http: HttpClient) { }

  loadConfig(): any {
    return this.http.get('assets/config/config.json')
      .toPromise()
      .then((config: any) => {
        this.config = config;
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  getConfig(): any {
    return this.config;
  }
}
