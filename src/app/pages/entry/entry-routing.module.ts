import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './entry.component';

const routes: Routes = [
  { path: '', component: EntryComponent, children: [
    {
      path: '', redirectTo: '/packages', pathMatch: 'full'
    },
    {
      path: 'packages',
      loadChildren: () => import('../packages/packages.module').then(m => m.PackagesModule)
    },
    {
      path: 'shipping',
      loadChildren: () => import('../shipping/shipping.module').then(m => m.ShippingModule)
    }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule { }
