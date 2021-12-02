import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDosCamposComponent } from './mostrar-dos-campos.component';

describe('MostrarDosCamposComponent', () => {
  let component: MostrarDosCamposComponent;
  let fixture: ComponentFixture<MostrarDosCamposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDosCamposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDosCamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
