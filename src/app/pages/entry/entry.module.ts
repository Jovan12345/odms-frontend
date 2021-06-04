import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { HeadingComponent } from 'src/app/shared/components/heading/heading.component';
import { MenuBarComponent } from 'src/app/shared/components/menu-bar/menu-bar.component';
import { BaseComponent } from '../base/base.component';
import { EntryComponent } from './entry.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export class LazyTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return from(import(`../../../assets/i18n/entry/${lang}.json`));
  }
}

@NgModule({
  declarations: [
    EntryComponent,
    MenuBarComponent,
    BaseComponent,
    HeadingComponent
  ],
  imports: [
    CommonModule,
    EntryRoutingModule,
    RouterModule,
    FontAwesomeModule,
    TranslateModule.forChild({
      defaultLanguage: 'en_GB',
      isolate: true,
      loader: {
        provide: TranslateLoader,
        useClass: LazyTranslateLoader
      }
    })
  ]
})
export class EntryModule { }
