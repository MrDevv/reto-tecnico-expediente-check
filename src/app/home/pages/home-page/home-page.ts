import { Component, inject } from '@angular/core';
import { DetalleInversionService } from '../../../services/detalle-inversion-service';
import { tap } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-home-page',
  imports: [CurrencyPipe],
  templateUrl: './home-page.html',
})
export class HomePage {
    public inversionService = inject(DetalleInversionService)

    inversionesResource = rxResource({
      stream: () => {
        return this.inversionService.obtenerDetalleInversiones().pipe(
          tap(data => console.log('DATA:', data))
        );
        }
      })

}
