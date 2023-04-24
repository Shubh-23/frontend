import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEMIComponent } from './list-emi.component';

describe('ListEMIComponent', () => {
  let component: ListEMIComponent;
  let fixture: ComponentFixture<ListEMIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEMIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
