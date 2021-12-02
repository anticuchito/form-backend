import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormularioService } from '../servicios/formulario.service';

@Component({
  selector: 'app-mostrar-dos-campos',
  templateUrl: './mostrar-dos-campos.component.html',
  styleUrls: ['./mostrar-dos-campos.component.css'],
})
export class MostrarDosCamposComponent implements OnInit {
  datos_formulario: any;

  constructor(private serviceForm: FormularioService) {}

  getDataFields() {
    this.serviceForm.obtenerDoscampos().subscribe(
      (response: any) => {
        this.datos_formulario = response.registros;
        console.log(this.datos_formulario);
      },
      (error) => {
        console.log(error);
        alert('hay errores');
      }
    );
  }

  eliminarDosCampos(id_registroForm: any) {
    this.serviceForm.eliminarDosCampos(id_registroForm).subscribe(
      (response: any) => {
        if (response.registroForms.deletedCount > 0) {
          alert('registro eliminado');
          this.getDataFields();
        } else {
          alert('no se a podido eliminar el registro');
        }
      },
      (error) => {
        console.log(error);
        alert('hay errores');
      }
    );
  }

  ngOnInit(): void {
    this.getDataFields();
  }
}
