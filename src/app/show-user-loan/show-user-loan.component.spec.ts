import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserLoanComponent } from './show-user-loan.component';

describe('ShowUserLoanComponent', () => {
  let component: ShowUserLoanComponent;
  let fixture: ComponentFixture<ShowUserLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUserLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
