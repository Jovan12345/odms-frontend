import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShippingComponent } from './shipping.component';
import { ShippingRoutingModule } from './shipping-routing.module';
import { TableShipmentComponent } from './table-shipment/table-shipment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [ShippingComponent, TableShipmentComponent],
  imports: [CommonModule, ShippingRoutingModule, NgxPaginationModule, ReactiveFormsModule, FormsModule, Ng2SearchPipeModule],
})
export class ShippingModule {}
