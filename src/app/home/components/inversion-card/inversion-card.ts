import { Component, input } from '@angular/core';
import { DetalleInversion } from '../../interfaces/response-detalle-inversion';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'inversion-card',
  imports: [CurrencyPipe],
  templateUrl: './inversion-card.html',
})
export class InversionCard {
  public detalleInversion = input<DetalleInversion | null>(null);

}
