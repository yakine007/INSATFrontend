import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacusComponent } from './contacus.component';

describe('ContacusComponent', () => {
  let component: ContacusComponent;
  let fixture: ComponentFixture<ContacusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
