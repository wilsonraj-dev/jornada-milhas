import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBaseComponent } from './formulario-base.component';

describe('FormularioBaseComponent', () => {
  let component: FormularioBaseComponent;
  let fixture: ComponentFixture<FormularioBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioBaseComponent]
    });
    fixture = TestBed.createComponent(FormularioBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
