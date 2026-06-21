import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ResponseDetalleInversion } from '../home/interfaces/response-detalle-inversion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetalleInversionService {

  private http = inject(HttpClient);

  obtenerDetalleInversiones(): Observable<ResponseDetalleInversion> {
    return this.http.get<ResponseDetalleInversion>(environment.apiURL, {
      params: {
        limit: '9'
      }
    })
  }

}