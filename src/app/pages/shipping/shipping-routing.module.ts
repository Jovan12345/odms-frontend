import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShippingComponent } from "./shipping.component";

const routes: Routes = [
  {
    path: '', component: ShippingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingRoutingModule{}
