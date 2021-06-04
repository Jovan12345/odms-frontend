import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Shipment } from 'src/app/core/interfaces/shipment.interface';
import { ShipmentsService } from 'src/app/core/services/shipments.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-table-shipment',
  templateUrl: './table-shipment.component.html',
  styleUrls: ['./table-shipment.component.scss']
})
export class TableShipmentComponent implements OnInit, OnDestroy {

  p: number = 1;
  shipments: Shipment[];
  searchValue: string = null;

  constructor(private shipmentService: ShipmentsService) { }

  ngOnInit(): void {
    this.getShipments();
  }

  ngOnDestroy(){

  }

  getShipments():void{
    this.shipmentService.getShipments().subscribe((response: any) => {
      this.shipments = response;
      console.log(this.shipments);
    })
  }
}
