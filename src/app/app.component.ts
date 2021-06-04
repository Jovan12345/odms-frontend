import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'optima-ods-fe';

  constructor(
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService
  ) {
    translate.addLangs(['en_GB']);
    translate.setDefaultLang('en_GB');
    translate.use('en_GB');
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
