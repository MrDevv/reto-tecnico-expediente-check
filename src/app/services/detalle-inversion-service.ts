import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ResponseDetalleInversion } from '../home/interfaces/response-detalle-inversion';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetalleInversionService {

  private http = inject(HttpClient);

  obtenerDetalleInversiones(q: string = '', departamento: string = ''): Observable<ResponseDetalleInversion> {    
    return this.http.get<ResponseDetalleInversion>(environment.apiURL, {
      params: {
        limit: '9',
        q: q,
        departamento: departamento
      }
    }).pipe(
      catchError(error => {
        return throwError(() => error); 
      }
    ));
  }

}