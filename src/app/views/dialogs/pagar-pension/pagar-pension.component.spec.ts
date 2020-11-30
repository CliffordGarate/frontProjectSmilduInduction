import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarPensionComponent } from './pagar-pension.component';

describe('PagarPensionComponent', () => {
  let component: PagarPensionComponent;
  let fixture: ComponentFixture<PagarPensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagarPensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
