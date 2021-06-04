import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePackagesComponent } from './table-packages.component';

describe('TablePackagesComponent', () => {
  let component: TablePackagesComponent;
  let fixture: ComponentFixture<TablePackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
