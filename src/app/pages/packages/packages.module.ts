import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';
import { TablePackagesComponent } from './table-packages/table-packages.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NewPackageComponent } from './new-package/new-package.component';
import { DragScrollModule } from 'ngx-drag-scroll';

export class LazyTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return from(import(`../../../assets/i18n/packages/${lang}.json`));
  }
}

@NgModule({
  declarations: [PackagesComponent, TablePackagesComponent, NewPackageComponent],
  imports: [
    CommonModule,
    PackagesRoutingModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DragScrollModule,
    TranslateModule.forChild({
      defaultLanguage: 'en_GB',
      loader: {
        provide: TranslateLoader,
        useClass: LazyTranslateLoader,
      },
      isolate: true,
    }),
  ],
})
export class PackagesModule {}
