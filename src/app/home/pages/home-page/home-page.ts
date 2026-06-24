import { Component, inject, signal } from '@angular/core';
import { DetalleInversionService } from '../../../services/detalle-inversion-service';
import { firstValueFrom } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { Loading } from '../../../shared/components/loading/loading';
import { DetalleInversion } from '../../interfaces/response-detalle-inversion';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { InversionCard } from "../../components/inversion-card/inversion-card";

const DEPARTAMENTOS: string[] = [
  'AREQUIPA',
  'ANCASH',
  'HUANUCO',
  'PUNO',
  'JUNIN',
  'AYACUCHO',
  'HUANCAVELICA',
  'SAN MARTIN',
  'UCAYALI',
  'ICA',
  'LORETO',
  'TACNA',
  'APURIMAC',
  'CUSCO',
  'LIMA',
  'CAJAMARCA',
  'AMAZONAS',
  'PIURA',
  'CALLAO',
  'LA LIBERTAD',
  'TUMBES',
  'LAMBAYEQUE',
  'MOQUEGUA',
  'PASCO',
  'MADRE DE DIOS',
  '-MUL.DEP-'
];

@Component({
  selector: 'app-home-page',
  imports: [Loading, ReactiveFormsModule, InversionCard],
  templateUrl: './home-page.html',
})
export class HomePage {
    public inversionService = inject(DetalleInversionService)
    public fb = inject(FormBuilder);

    public inversiones = signal<DetalleInversion[]>([]);
    public isLoading = signal(false);
    public departamentoSeleccionado = signal<null | string>(null);
    public departamentos = signal<string[]>(DEPARTAMENTOS);
    public totalElements = signal(0);

    formInversiones = this.fb.group({
      nombreInversion: ['', Validators.required]
    })

    constructor() {
      this.obtenerDetalleInversiones();
    }

    async seleccionarDepartamento(departamento: string) {
      
      if (this.departamentoSeleccionado() === departamento) {
        this.departamentoSeleccionado.set(null);
      }else {
        this.departamentoSeleccionado.set(departamento);
      }    

      try { 
        this.isLoading.set(true);

        const nombre = this.formInversiones.get('nombreInversion')?.value || '';
        const departamento = this.departamentoSeleccionado();
        
        const response = await firstValueFrom(this.inversionService.obtenerDetalleInversiones(nombre, departamento || ''));
        this.inversiones.set(response.records);
        this.totalElements.set(response.result.include_total);
      } catch (error) {
        console.error('Error al filtrar por departamento:', error);
      } finally {
        this.isLoading.set(false);
      }
    }

    async obtenerDetalleInversiones() {
      this.isLoading.set(true);
      try {
        const response = await firstValueFrom(this.inversionService.obtenerDetalleInversiones());
        this.inversiones.set(response.records);
        this.totalElements.set(response.result.include_total)
      }catch (error) {
        console.error('Error al obtener las inversiones:', error);
      } finally {
        this.isLoading.set(false);
      }
    }

    async buscarInversionPorNombre() {
      const nombre = this.formInversiones.get('nombreInversion')?.value || '';
      const departamento = this.departamentoSeleccionado();

      this.isLoading.set(true);
      try {
        const response = await firstValueFrom(this.inversionService.obtenerDetalleInversiones(nombre, departamento || ''));
        this.inversiones.set(response.records);
        this.totalElements.set(response.result.include_total)
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
