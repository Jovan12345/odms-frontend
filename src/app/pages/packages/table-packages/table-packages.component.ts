import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Package } from 'src/app/core/interfaces/package.interface';
import { PackagesService } from 'src/app/core/services/packages.service';

@Component({
  selector: 'app-table-packages',
  templateUrl: './table-packages.component.html',
  styleUrls: ['./table-packages.component.scss'],
})
export class TablePackagesComponent implements OnInit {
  packages: Package[];
  selectedProduct1: any;
  searchFilter: string = "";

  @ViewChild('dt1') dt1: Table | undefined;

  constructor(private packageService: PackagesService) {}

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages(): void {
    this.packageService.getPackages().subscribe((response: any) => {
      this.packages = response;
    });
  }

  // clear(table: Table) {
  //   table.clear();
  // }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt1!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
    this.searchFilter = $event.target
  }

  updatePackage(packageId: number): void{
    console.log('Update package', packageId)
  }
}
