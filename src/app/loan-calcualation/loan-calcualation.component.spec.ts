import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCalcualationComponent } from './loan-calcualation.component';

describe('LoanCalcualationComponent', () => {
  let component: LoanCalcualationComponent;
  let fixture: ComponentFixture<LoanCalcualationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanCalcualationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCalcualationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
