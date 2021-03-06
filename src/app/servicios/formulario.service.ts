import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  url_backend = environment.url_backend + '/registroForm';
  constructor(private http: HttpClient) {}

  crear_DatosFOrmulario(datosFormulario: any) {
    console.log(datosFormulario);
    return this.http.post(
      `${this.url_backend}/crear-registro`,
      datosFormulario
    );
  }
  obtenerDoscampos() {
    return this.http.get(`${this.url_backend}/obtener-registros`);
  }
  eliminarDosCampos(id_registroForm: any) {
    return this.http.delete(
      `${this.url_backend}/elmininar-registro/${id_registroForm}`
    );
  }
}
