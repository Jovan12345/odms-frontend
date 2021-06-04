import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewPackageComponent } from "./new-package/new-package.component";
import { PackagesComponent } from "./packages.component";

const routes: Routes = [
  {
    path: '', component: PackagesComponent
  },
  {
    path: 'new-package', component: NewPackageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule{}
