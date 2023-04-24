import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaonDetailsComponent } from './laon-details.component';

describe('LaonDetailsComponent', () => {
  let component: LaonDetailsComponent;
  let fixture: ComponentFixture<LaonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
