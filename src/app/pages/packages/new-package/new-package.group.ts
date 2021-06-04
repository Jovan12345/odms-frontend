import { Injectable } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class NewPackageGroup{
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.form = formBuilder.group({
      Barcode: new FormControl(null, Validators.required),
      DateCreated: new FormControl(null, Validators.required),
      DateRecieved: new FormControl(null),
      Weight: new FormControl(null, Validators.required),
      Height: new FormControl(null, Validators.required),
      Length: new FormControl(null, Validators.required),
      LocationId: new FormControl(null, Validators.required),
      ContainerId: new FormControl(null, Validators.required),
      StatusRecieved: new FormControl(null),
      StatusReadyForDelivery: new FormControl(null, Validators.required),
      StatusDelivered: new FormControl(null),
    })
  }
}
