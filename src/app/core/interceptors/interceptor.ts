import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

export const Interceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError(error => { 
      if (error.status == 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El servidor no se encuentra disponible en estos momentos.",
        });
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrió un error al obtener los datos. Por favor, inténtalo de nuevo más tarde.",
        });
      }

      return throwError(() => error); 
    }
    
  ));
};
