import { Component, inject, signal } from '@angular/core';
import { DetalleInversionService } from '../../../services/detalle-inversion-service';
import { firstValueFrom } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { Loading } from '../../../shared/components/loading/loading';
import { DetalleInversion } from '../../interfaces/response-detalle-inversion';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home-page',
  imports: [CurrencyPipe, Loading, ReactiveFormsModule],
  templateUrl: './home-page.html',
})
export class HomePage {
    public inversionService = inject(DetalleInversionService)
    public fb = inject(FormBuilder);

    public inversiones = signal<DetalleInversion[]>([]);
    public isLoading = signal(false);

    formInversiones = this.fb.group({
      nombreInversion: ['', Validators.required]
    })

    constructor() {
      this.obtenerDetalleInversiones();
    }

    async obtenerDetalleInversiones() {
      this.isLoading.set(true);
      try {
        const response = await firstValueFrom(this.inversionService.obtenerDetalleInversiones());
        this.inversiones.set(response.records);
      }catch (error) {
        console.error('Error al obtener las inversiones:', error);
      } finally {
        this.isLoading.set(false);
      }
    }

    async buscarInversionPorNombre() {
      const nombre = this.formInversiones.get('nombreInversion')?.value || '';
      if (nombre.length < 5) {
        Swal.fire({
          icon: 'warning',
          title: 'Búsqueda insuficiente',
          text: 'Por favor, ingresa al menos 5 caracteres para realizar la búsqueda.',
        });
        return;
      }


      this.isLoading.set(true);
      try {
        const response = await firstValueFrom(this.inversionService.obtenerDetalleInversiones(nombre));
        this.inversiones.set(response.records);
      } catch (error) {
        console.error('Error al buscar la inversión:', error);
      } finally {
        this.isLoading.set(false);
      }
    }

    limpiarInput() {
      this.formInversiones.reset();
    }

}
