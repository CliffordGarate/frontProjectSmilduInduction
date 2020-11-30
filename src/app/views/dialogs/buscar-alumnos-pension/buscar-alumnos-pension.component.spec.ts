import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAlumnosPensionComponent } from './buscar-alumnos-pension.component';

describe('BuscarAlumnosPensionComponent', () => {
  let component: BuscarAlumnosPensionComponent;
  let fixture: ComponentFixture<BuscarAlumnosPensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAlumnosPensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAlumnosPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
