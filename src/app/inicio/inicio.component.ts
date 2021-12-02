import { Component, OnInit } from '@angular/core';

import { FormularioService } from '../servicios/formulario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  formulario: any;
  constructor(
    private fb: FormBuilder,
    private serviceFormulario: FormularioService
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      campo1: ['', Validators.required],
      campo2: [''],
    });
  }

  get formReactive() {
    return this.formulario.controls;
  }

  enviarDatos() {
    //suscribe: is a whatcher and allos transmit data async and sync
    this.serviceFormulario
      .crear_DatosFOrmulario(this.formulario.value)
      .subscribe(
        (response: any) => {
          if (response.registro) {
            alert('datos guardados exitosamente');
            console.log(response);
          } else {
            alert('datos no registrados');
          }
        },
        (error) => {
          alert('error al registrar');
        }
      );
  }
}
