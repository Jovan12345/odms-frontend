import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShipmentComponent } from './table-shipment.component';

describe('TableShipmentComponent', () => {
  let component: TableShipmentComponent;
  let fixture: ComponentFixture<TableShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableShipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
