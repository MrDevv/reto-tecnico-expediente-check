import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { DetalleInversionService } from './services/detalle-inversion-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reto-tecnico-expediente-check');
  private inversionService = inject(DetalleInversionService);

  inversionesResource = rxResource({
    stream: () => this.inversionService.obtenerDetalleInversiones()
  })
}
