import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Package } from 'src/app/core/interfaces/package.interface';
import { PackagesService } from 'src/app/core/services/packages.service';
import { NewPackageGroup } from './new-package.group';

@Component({
  selector: 'app-new-package',
  templateUrl: './new-package.component.html',
  styleUrls: ['./new-package.component.scss'],
  providers: [ NewPackageGroup ]
})
export class NewPackageComponent implements OnInit {

  newPackageForm: FormGroup;

  newPackage: Package;
  packageId: number;

  constructor(
    private newPackageGroup: NewPackageGroup,
    private route: ActivatedRoute,
    private packagesService: PackagesService
  ) {
    this.newPackageForm = newPackageGroup.form;
  }

  ngOnInit(): void {
  }

  addNewPackage(): void {
    console.log(this.newPackageForm.value);
    this.newPackage = this.newPackageForm.value;
    this.packagesService.savePackage(this.newPackage);
    this.newPackageForm.reset();
    // this.router.navigate(['packages']);
  }

}
